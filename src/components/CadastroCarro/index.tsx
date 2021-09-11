import { useState, FormEvent, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { FiTrash2, FiEdit } from 'react-icons/fi';

import api from '../../services/api';

import { Container, SecCadastro, SecListagem } from './styles';

type Carro = {
  id: string;
  nomeCarro: string;
  modeloCarro: string;
};

export function CadastroCarro() {
  const [nomeCarro, setNomeCarro] = useState('');
  const [modeloCarro, setModeloCarro] = useState('');
  const [listaCarroBD, setListaCarroBD] = useState<Carro[]>([]);
  const [idUpdate, setIdUpdate] = useState('');

  useEffect(() => {
    getCarros();
  }, []);

  // busca todos os dados do BD
  async function getCarros() {
    try {
      const { data } = await api.get('/carros');
      setListaCarroBD(data);
    } catch (error) {
      console.error(error);
    }
  }

  // salvar dados no BD
  async function handleSalveCar(event: FormEvent) {
    try {
      // por padrão todo form ao clicar, a página é carregada, esse evento não deixa ela carregar
      event.preventDefault();

      if (idUpdate === '') {
        const carro = {
          id: uuid(),
          nomeCarro,
          modeloCarro,
        };

        // salva no BD
        await api.post('/carros', carro);

        // const updateCarro = [...listaCarroBD, carro];
        // atualiza a lista para mostrar
        // setListaCarroBD(updateCarro);

        getCarros();
      } else {
        updateCar();

        // console.log(idUpdate, nomeCarro, modeloCarro);
      }

      limparCampos();
    } catch (error) {
      console.error(error);
    }
  }

  // deleta um determinado carro
  async function deleteCar(id: string) {
    try {
      // delete um determinado carro do BD
      // await api.delete('/carros/delete', { data: { id } });
      await api.delete(`/carros/delete/${id}`);

      getCarros();
    } catch (error) {
      console.error(error);
    }
  }

  // alterar os dados de um determinado carro
  async function updateCar() {
    try {
      // pega o que o usuario alterou nos campos
      // id: tem que ser d jeito que está no BD, nomeCarro e modeloCarro -> não estão recebendo nada, pq o nome que está no BD é o mesmo que está aqui
      const data = { id: idUpdate, nomeCarro, modeloCarro };

      // altera um determinado carro do BD
      await api.put('/carros/carro', data);

      getCarros();

      setIdUpdate('');
    } catch (error) {
      console.error(error);
    }
  }

  // carregar dados nos inputs
  function carregaDados(lista: Carro) {
    setNomeCarro(lista.nomeCarro);
    setModeloCarro(lista.modeloCarro);
    setIdUpdate(lista.id);
  }

  // limpar campos
  function limparCampos() {
    setNomeCarro('');
    setModeloCarro('');
  }

  return (
    <Container>
      <SecCadastro>
        <h1>Grava dados no Banco de Dados</h1>

        <div>
          <h2>Cadastro de Carro</h2>

          <form onSubmit={handleSalveCar}>
            <div>
              <input
                type="text"
                placeholder="Digite o nome do carro"
                onChange={event => setNomeCarro(event.target.value)}
                value={nomeCarro}
              />

              <input
                type="text"
                placeholder="Digite o modelo do carro"
                onChange={event => setModeloCarro(event.target.value)}
                value={modeloCarro}
              />
            </div>

            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </SecCadastro>

      <SecListagem>
        <div>
          <h2>Lista todos os carros</h2>

          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Modelo</th>
                <th>&nbsp;</th>
                <th>&nbsp;</th>
              </tr>
            </thead>

            <tbody>
              {listaCarroBD.map(lista => {
                return (
                  <tr key={lista.id}>
                    <td>{lista.nomeCarro}</td>
                    <td>{lista.modeloCarro}</td>
                    <td>
                      <button type="button" onClick={() => deleteCar(lista.id)}>
                        <FiTrash2 />
                      </button>
                    </td>
                    <td>
                      <button type="button" onClick={() => carregaDados(lista)}>
                        <FiEdit />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </SecListagem>
    </Container>
  );
}
