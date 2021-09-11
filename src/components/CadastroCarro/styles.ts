import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  height: 100vh;

  section {
    width: 85%;
    margin-left: auto;
    margin-right: auto;

    padding: 1rem;

    h1 {
      padding: 1rem;
      text-align: center;

      font-size: 2rem;
    }

    > div {
      width: 80%;
      margin-left: auto;
      margin-right: auto;

      border: 2px solid darkgray;

      padding: 1rem;
    }
  }

  @media (max-width: 970px) {
    section {
      width: 100%;
    }
  }
`;

export const SecCadastro = styled.section`
  div {
    form {
      display: flex;
      justify-content: space-between;
      /* gap: 1.5rem; */
      margin-top: 0.5rem;
      padding: 0.5rem;
      text-align: center;

      > div {
        input {
          width: 10.5rem;
          background: lightgray;

          padding: 0 3px;

          // só aplica essa formatação do segundo elemento para frente
          & + input {
            margin-left: 0.5rem;
          }

          &::placeholder {
            color: #666360;
            font-size: 0.8rem;
          }
        }
      }

      button {
        background: lightgray;
        border: none;
        padding: 0 0.8rem;
        opacity: 0.9;

        font-size: 0.9rem;

        &:hover {
          opacity: 1;
        }
      }
    }
  }

  @media (max-width: 970px) {
    div {
      form {
        /* display: block; */
        gap: 1rem;

        div {
          /* height: 10rem; */
          display: inline-grid;

          input {
            width: 100%;
            // só aplica essa formatação do segundo elemento para frente
            & + input {
              /* margin-left: 0; */
              margin: 0.5rem 0 0 0;
            }
          }
        }
      }
    }
  }

  @media (max-width: 320px) {
    div {
      form {
        display: grid;

        div {
          input {
            width: 100%;
          }
        }
      }
    }
  }
`;

export const SecListagem = styled.section`
  div {
    table {
      width: 100%;
      margin-top: 0.5rem;
      padding: 0.5rem;
      text-align: center;

      // retira a borda de uma coluna para outra
      border-spacing: 0;

      thead {
        background: darkgray;
        // para poder aplicar a borda arredondada
        /* border-collapse: collapse; */
        display: block;

        tr {
          th {
            padding: 0.1rem 0;
            width: 45%;

            // aplica somente no primeiro elemento do th
            &:first-child {
              border-radius: 0.25rem 0 0 0;
            }

            // aplica somente no segundo último elemento do th
            &:nth-last-child(2) {
              width: 3rem;
            }

            // aplica somente no último elemento do th
            &:last-child {
              width: 3rem;
              border-radius: 0 0.25rem 0 0;
            }
          }
        }
      }

      tbody {
        background: lightgray;

        display: block;
        overflow-y: scroll;
        height: 22rem;

        tr {
          width: 100%;

          td {
            border-top: 1.5px solid darkgray;
            padding: 0.2rem 0;

            width: 45%;

            // aplica somente no segundo último elemento do th
            &:nth-last-child(2) {
              width: 3rem;
            }

            // aplica somente no último elemento do th
            &:last-child {
              width: 3rem;
              border-radius: 0 0.25rem 0 0;
            }
          }
        }
        /* } */
      }
    }
  }
`;
