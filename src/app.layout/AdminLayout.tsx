import React from 'react';
import styled from 'styled-components';

const AdminLayout = ({ componentContent }) => {
  return <StyledWrapper>{componentContent}</StyledWrapper>;
};

export default AdminLayout;

const StyledWrapper = styled.div``;
