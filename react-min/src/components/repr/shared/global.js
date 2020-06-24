import { createGlobalStyle, css } from 'styled-components';
import { color, typography, background } from './styles'

export const fontUrl = '';

const bodyStyles = css`
  * {
    box-sizing: border-box;
  }
  background-color: ${background.app};
  color: ${color.app};
`;

export const GlobalStyle = createGlobalStyle`
  body {
    ${bodyStyles}
  }
`;