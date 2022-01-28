const flexCenter = `
  display: flex;
  align-items: center;
  justify-content: center;
`;

const lineClamp = `
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const theme = {
  flexCenter,
  lineClamp,
};

export default theme;
