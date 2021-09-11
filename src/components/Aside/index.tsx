import { Link } from 'react-router-dom';
import { Container } from './styles';

import imageCarro from '../../assets/images.jpg';

export function Aside() {
  return (
    <Container>
      <section>
        <div className="cabecalho">
          <div className="title">
            <h1>Cadastros</h1>
          </div>

          <div className="cadastro">
            <ul>
              <Link to="/cadastroCarro">
                <li>Cadastro de Carro</li>
              </Link>

              <Link to="/cadastroPeca">
                <li>Cadastro de Peça</li>
              </Link>
            </ul>
          </div>
        </div>

        <div className="img">
          <img src={imageCarro} alt="Imagem Auto Elétrica" />
        </div>
      </section>
    </Container>
  );
}
