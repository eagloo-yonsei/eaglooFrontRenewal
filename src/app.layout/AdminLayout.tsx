import React from 'react';
import styled from 'styled-components';
import AdminHeader from './adminHeader/AdminHeader';

const AdminLayout = ({ componentContent }) => {
  return (
    <StyledWrapper>
      <AdminHeader />
      <div className="admin-component">{componentContent}</div>
    </StyledWrapper>
  );
};

export default AdminLayout;

const StyledWrapper = styled.div`
  max-width: 100vw;
  overflow-x: hidden;
  min-width: 1024px;
  height: 100vh;
  min-height: 768px;
  position: relative;
  background: var(--color-blue-gradient);

  .admin-component {
    height: calc(100vh - 100px);
    min-height: calc(100% - 100px);
    padding: 18px;
  }
`;
