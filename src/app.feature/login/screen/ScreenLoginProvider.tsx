import React, {
  createContext,
  useContext,
  useState,
  useRef,
  RefObject,
} from 'react';
import axios from 'axios';
import { SHA3 } from 'sha3';
import { ChildrenProp, User } from 'app.modules/constant/interface';
import { useRouter } from 'next/router';
import { useStoreIntoAPP } from 'app.store/intoAPP/store.intoAPP';
import {
  toastErrorMessage,
  toastLoginSuccessMessage,
} from 'app.modules/util/ToastMessage';
import { setCookie } from 'nookies';

interface LoginContext {
  emailInput: string;
  passwordInput: string;
  signingIn: boolean;
  setEmailInput: (input: string) => void;
  setPasswordInput: (input: string) => void;
  signIn: () => void;
  emailInputRef?: RefObject<HTMLInputElement>;
}

const InitialLoginContext: LoginContext = {
  emailInput: '',
  passwordInput: '',
  signingIn: false,
  setEmailInput: () => {},
  setPasswordInput: () => {},
  signIn: () => {},
};

const LoginContext = createContext<LoginContext>(InitialLoginContext);
export const useLoginContext = () => useContext(LoginContext);

export default function LoginProvider({ children }: ChildrenProp) {
  const router = useRouter();
  const requestAuthUser = useStoreIntoAPP((state) => state.requestAuthUser);

  const hashedPassword = new SHA3(512);
  const [emailInput, setEmailInput] = useState<string>('');
  const [passwordInput, setPasswordInput] = useState<string>('');
  const [signingIn, setSigningIn] = useState<boolean>(false);
  const emailInputRef = useRef<HTMLInputElement>(null);

  const API_ENDPOINT = process.env.EAGLOO_API_URI;

  async function signIn() {
    setSigningIn(true);
    hashedPassword.reset();
    hashedPassword.update(passwordInput);
    await axios
      .get<{ user: User; success: boolean; message: string }>(
        `${API_ENDPOINT}/api/user/auth/${emailInput}/${hashedPassword.digest(
          'hex'
        )}`
      )
      .then(function ({ data }) {
        if (data.success) {
          // setIsLoggedIn(true);
          setCookie(null, '_eagloo_user_info', JSON.stringify(data.user));
          requestAuthUser(data.user as User);
          toastLoginSuccessMessage(data.user.nickName || emailInput);
          router.back();
          // history.push("/");
        } else {
          setSigningIn(false);
          toastErrorMessage(data.message);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const loginContext = {
    emailInput,
    passwordInput,
    signingIn,
    setEmailInput,
    setPasswordInput,
    signIn,
    emailInputRef,
  };

  return (
    <LoginContext.Provider value={loginContext}>
      {children}
    </LoginContext.Provider>
  );
}
