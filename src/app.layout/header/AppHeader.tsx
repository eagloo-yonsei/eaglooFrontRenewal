import React from 'react';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';
import HeaderMenu from './HeaderMenu';
import HeaderRT from './HeaderRT';
import { useGetUser } from 'app.store/intoAPP/store.intoAPP';
import { fadeIn, fadeOut } from 'app.styled/keyframe';

const AppHeader = () => {
  const getUser = useGetUser();
  const router = useRouter();
  if (router.pathname === '/login' || router.pathname === '/signup')
    return null;

  if (getUser?.isLoading) return null;
  return (
    <StyledWrapper isLoading={getUser?.isLoading}>
      <div className="logo-text">
        <Link href="/">EAGLOO</Link>
      </div>
      <HeaderMenu />
      <HeaderRT getUser={getUser} />
    </StyledWrapper>
  );
};

export default AppHeader;

const StyledWrapper = styled.div`
  ${({ isLoading }) => css`
    display: flex;
    gap: 180px;
    width: 100%;
    height: 160px;
    justify-content: space-between;
    align-items: center;
    padding: 0px 80px 20px;
    animation: ${isLoading ? fadeOut : fadeIn} 0.5s;

    @media only screen and (max-width: 1300px) {
      gap: 50px;
    }

    .logo-text {
      color: var(--color-white);
      font-size: 30px;
      font-weight: bold;
      font-family: 'RecipeKorea';
      width: 140px;
    }
  `}
`;
