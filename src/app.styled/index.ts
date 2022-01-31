import { createGlobalStyle } from 'styled-components';
import { common } from 'app.styled/common';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-main: #3653FF;
    --color-blue-000:#1D74FF;
    --color-blue-100: #0A4DC3;
    --color-blue-200: #0A4BBF;
    --color-blue-300: #0D45B5;
    --color-blue-400: #113CA4;
    --color-blue-500: #172F8C;
    --color-blue-600: #1E1F6D;
    --color-blue-700: #211A64;

    --color-light-blue-000:#DEEBFF;
    --color-light-blue-100:#B8D2FF;
    --color-light-blue-200: #9AA9FF;
    
    --color-blue-gradient: linear-gradient(50deg, #0A4DC3, #172F8C);

    --color-white: #FFFFFF;
    --color-black: #000000;
    
    --color-gray-100:#ADADAD;
    --color-gray-200: #020202BF;
    
    --color-orange-100: #F7931E;
    --color-orange-200: #F47B20;
    --color-orange-300: #F16223;
    --color-orange-400: #F15A24;
    
    --color-orange-gradient: linear-gradient(50deg, #F7931E, #F15A24);
  }
  
  ${reset};

  a {
    text-decoration: none;
    color: unset;
  }

  * {
    box-sizing: border-box;
  }
  
  html {
    width: 100vw;
    height: 100vh;
    min-height: 768px;
    min-width: 1024px;
  }

  body {    
    background: var(--color-blue-gradient);
  }
`;
