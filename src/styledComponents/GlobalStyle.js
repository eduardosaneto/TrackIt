import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `
  body {
    background: #fff;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  textarea:focus, button:focus, li:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }

  button {
    font-family: 'Lexend Deca', sans-serif;
    border: none;
  }

  input {
    width: 303px;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-bottom: 8px;
    padding-left: 11px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    line-height: 25px;
    color: #666;
    }

  input:focus {
    border: 1px solid #2c2c2c;
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  ::placeholder {
  color: #DBDBDB;
  }

  h1 {
    font-family: 'Playball', sans-serif;
  } 

  h2, h3, h4, p, button {
    font-family: 'Lexend Deca', sans-serif;
  }

`;

export default GlobalStyle;