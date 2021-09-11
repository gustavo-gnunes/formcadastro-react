import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: gray;
    color: #000;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  .main {
    display: flex;
  }

  button {
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  h2 {
    font-size: 1.7rem;
  }

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%; /* 15px */
    }
  }
  @media(max-width: 970px) {
    html {
      font-size: 87.5%; /* 14px */
    }
  }
  @media(max-width:700px) {
    :root {
      font-size: 75%; /* 12px */
    }

    .main {
      display: block;
    }
  }
  @media(max-width: 590px) {
    :root {
      font-size: 62.25%; /* 10px */
    }
  }
`;
