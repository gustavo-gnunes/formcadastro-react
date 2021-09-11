import styled from 'styled-components';

export const Container = styled.aside`
  height: 100vh;
  min-width: 12rem;

  background: #fff;

  section {
    height: 100%;
    width: 90%;
    margin-left: auto;
    margin-right: auto;

    display: flex;
    flex-direction: column;

    .title,
    .cadastro {
      margin: 0.5rem 0.5rem;
      padding: 0.5rem;
    }

    .title {
      h1 {
        font-size: 1.5rem;
      }
    }

    .cadastro {
      ul {
        a {
          display: inline-block;
          text-decoration: none;
          color: #000;

          li {
            list-style: none;
            margin-bottom: 0.5rem;
            padding: 0.5rem 0;

            font-size: 1rem;

            &:hover {
              border-bottom: 2px solid #000;
              padding-bottom: 0.4rem;
              /* color: red; */
            }
          }
        }
      }
    }

    .img {
      img {
        width: 100%;
        height: 10rem;
        margin-top: 4rem;
      }
    }
  }

  @media (max-width: 700px) {
    height: 10rem;

    section {
      display: flex;
      flex-direction: row;

      .cabecalho {
        width: 60%;

        .cadastro {
          ul {
            li {
              margin-right: 3rem;
            }
          }
        }
      }

      .img {
        img {
          margin-top: 0rem;
        }
      }
    }
  }
`;
