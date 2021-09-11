import { useState, useEffect, FormEvent } from 'react';
// import { parseISO, format } from 'date-fns';
import { v4 as uuid } from 'uuid';
import { FiTrash2, FiEdit } from 'react-icons/fi';

import { Container, SecCadastro, SecListagem } from './styles';

type ListaPeca = {
  id: string;
  peca: string;
  marca: string;
  dtValidade: string;
};

export function CadastroPeca() {
  const [nomePeca, setNomePeca] = useState('');
  const [marcaPeca, setMarcaPeca] = useState('');
  const [dataValidadePeca, setDataValidadePeca] = useState('');
  // const [formatDate, setFormatDate] = useState('');
  const [listaAtualizada, setListaAtualizada] = useState<ListaPeca[]>([]);

  // para saber se é um cadastro novo ou alteração
  const [idUpdate, setIdUpdate] = useState('');
  const [indexUpdate, setIndexUpdate] = useState(0);

  // carrega lista que está no localStorage, qdo atualiza a página
  useEffect(() => {
    carregarLista();
  }, []);

  // carregar lista que está no localStorage
  function carregarLista() {
    const listaLocalStorage = JSON.parse(
      localStorage.getItem('listaPeca') || '[]',
    );

    // atualiza listaAtualizada com o que tem no localStorage
    setListaAtualizada(listaLocalStorage);
  }

  // salvar peça no LocalStorage
  function handleSalveCar(event: FormEvent) {
    event?.preventDefault();

    if (
      nomePeca.trim() === '' ||
      marcaPeca.trim() === '' ||
      dataValidadePeca.trim() === ''
    ) {
      alert('Digite todos os campo!');
      return;
    }

    // convertDate();

    if (idUpdate === '') {
      // o que o usuário digitou
      const listaPeca = {
        id: uuid(),
        peca: nomePeca,
        marca: marcaPeca,
        // dtValidade: formatDate,
        dtValidade: dataValidadePeca,
      };

      // o que já tem no localStorage, mais o que o usuário digitou
      const listAtualizada = [...listaAtualizada, listaPeca];

      // atualiza a lista no localStorage
      localStorage.setItem('listaPeca', JSON.stringify(listAtualizada));
      setListaAtualizada(listAtualizada);
    } else {
      updatePeca();
    }

    limparCampos();
  }

  // deletar uma peça no localStorage
  function deletePeca(index: number) {
    // deleta a peça pela posição
    listaAtualizada.splice(index, 1);

    // grava no localStorage a lista atualizada
    localStorage.setItem('listaPeca', JSON.stringify(listaAtualizada));
    setListaAtualizada(listaAtualizada);

    carregarLista();
  }

  // alterar uma peça no localStorage
  function updatePeca() {
    const itemUpdate = listaAtualizada.slice();
    itemUpdate[indexUpdate].id = idUpdate;
    itemUpdate[indexUpdate].peca = nomePeca;
    itemUpdate[indexUpdate].marca = marcaPeca;
    itemUpdate[indexUpdate].dtValidade = dataValidadePeca;

    localStorage.setItem('listaPeca', JSON.stringify(itemUpdate));

    setIdUpdate('');
  }

  // envia dados para o input
  function enviarDados(lista: ListaPeca, index: number) {
    setNomePeca(lista.peca);
    setMarcaPeca(lista.marca);
    setDataValidadePeca(lista.dtValidade);

    setIdUpdate(lista.id);
    setIndexUpdate(index);
  }

  // formartar data
  // function fomartaDate(date: string) {
  //   const data = parseISO(date);

  //   console.log('Data ', data);

  //   return data;
  // }

  // limpar campos input
  function limparCampos() {
    setNomePeca('');
    setMarcaPeca('');
    setDataValidadePeca('');
  }

  return (
    <Container>
      <SecCadastro>
        <h1>Grava dados no LocalStorage</h1>
        <div>
          <h2>Cadastro de Peça</h2>

          <form onSubmit={handleSalveCar}>
            <div>
              <input
                type="text"
                placeholder="Digite o nome da peça"
                onChange={event => setNomePeca(event.target.value)}
                value={nomePeca}
              />

              <input
                type="text"
                placeholder="Digite a marca da peça"
                onChange={event => setMarcaPeca(event.target.value)}
                value={marcaPeca}
              />

              <input
                type="date"
                onChange={event => setDataValidadePeca(event.target.value)}
                value={dataValidadePeca}
              />
            </div>
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </SecCadastro>

      <SecListagem>
        <div>
          <h2>Lista todos as peças</h2>

          {/* <div className="scroll"> */}
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Marca</th>
                <th>Data</th>
                <th>&nbsp;</th>
                <th>&nbsp;</th>
              </tr>
            </thead>

            <tbody>
              {listaAtualizada.map((lista, index) => {
                return (
                  <tr key={lista.id}>
                    <td>{lista.peca}</td>
                    <td>{lista.marca}</td>
                    <td>{lista.dtValidade}</td>
                    <td>
                      <button type="button" onClick={() => deletePeca(index)}>
                        <FiTrash2 />
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={() => enviarDados(lista, index)}
                      >
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
