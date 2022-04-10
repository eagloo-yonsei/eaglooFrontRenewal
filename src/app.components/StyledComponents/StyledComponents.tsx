import React, { ReactElement } from 'react';
import styled, { keyframes } from 'styled-components';
import { CircularProgress } from '@material-ui/core';
import { useRouter } from 'next/router';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import theme from 'app.styled/theme';

export const FadeIn20 = keyframes`
    from{
        opacity: 0
    }
    to {
        opacity: 0.2
    }
`;

export const FadeInFull = keyframes`
    from{
        opacity: 0
    }
    to {
        opacity: 1
    }
`;

export const SlideUp = keyframes`
    from{
        transform:translateY(1200px);
    }
    to {
        transform:translateY(0px);
    }
`;

export const ModalBackGround = styled.div`
  animation: ${FadeIn20} 0.5s ease-out;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.2;
`;

export const FullScreenContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const PageContainer = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
`;

export const FullPageContainer = styled(PageContainer)`
  animation: ${FadeInFull} 0.5s ease-out;
`;

export const SlideUpPageContainer = styled(PageContainer)`
  /* animation: ${SlideUp} 0.5s ease-out; */
  animation: ${FadeInFull} 0.5s ease-out;
  ${(props) => `height: calc(100% - ${props.theme.headerHeight});`};
  background: white;
  padding: 35px;
  margin-top: ${(props) => props.theme.headerHeight};
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
`;

export const HeaderPageContainer = styled(PageContainer)`
  animation: ${FadeInFull} 0.5s ease-out;
  margin-top: ${(props) => props.theme.headerHeight};
`;

export const AdminRouterContainer = styled(FullScreenContainer)`
  animation: ${FadeInFull} 0.5s ease-out;
  margin-top: ${(props) => props.theme.adminHeaderHeight};
  padding: 40px 18px;
`;

export const StylelessButton = styled.button`
  border: none;
  outline: none;
  color: inherit;
  background-color: inherit;
  font-size: inherit;
  font-family: inherit;
  &:hover {
    cursor: pointer;
  }
`;

interface LinkProps {
  to: string;
  children?: string | ReactElement;
}

export function StylelessLink({ to, children }: LinkProps) {
  const router = useRouter();
  return (
    <div
      style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}
      onClick={() => {
        router.push(to);
      }}
    >
      {children}
    </div>
  );
}

interface SubmitButtonProp {
  buttonContent: string;
  loadingStatus?: boolean;
  submitFunction: () => void;
  disabledCondition?: boolean;
  width?: string;
  height?: string;
  fontSize?: string;
  ringSize?: number;
}

export function SubmitButton({
  buttonContent,
  loadingStatus,
  submitFunction,
  disabledCondition,
  width,
  height,
  fontSize,
  ringSize,
}: SubmitButtonProp) {
  if (disabledCondition) {
    return (
      <UnReadyButtonContainer width={width} height={height} fontSize={fontSize}>
        {buttonContent}
      </UnReadyButtonContainer>
    );
  }

  if (loadingStatus) {
    return (
      <SubmittingButtonContainer
        width={width}
        height={height}
        fontSize={fontSize}
      >
        <CircularProgress color="inherit" size={ringSize || 30} thickness={5} />
      </SubmittingButtonContainer>
    );
  } else {
    return (
      <ReadyButtonContainer
        width={width}
        height={height}
        fontSize={fontSize}
        onClick={() => {
          submitFunction();
        }}
      >
        {buttonContent}
      </ReadyButtonContainer>
    );
  }
}

const SubmittingButtonContainer = styled.div<{
  width?: string;
  height?: string;
  fontSize?: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '46px')};
  color: white;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '22px')};
  font-family: ${(props) => props.theme.plainBoldTextFont};
  border-radius: 8px;
  background: ${(props) => props.theme.orangeGradient};
`;

const ReadyButtonContainer = styled(SubmittingButtonContainer)`
  :hover {
    cursor: pointer;
  }
`;

const UnReadyButtonContainer = styled(SubmittingButtonContainer)`
  background: none;
  background-color: ${(props) => props.theme.loginMessageGray};
`;

export const BoxStyle = makeStyles({});

export const CheckBoxStyle = makeStyles({});

export const SelectorStyle = makeStyles((materialTheme: Theme) =>
  createStyles({
    formControl: {
      margin: materialTheme.spacing(1),
      minWidth: 150,
      fontFamily: theme.subLabelFont,
    },
  })
);
