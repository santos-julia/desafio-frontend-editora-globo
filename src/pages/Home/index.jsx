import React, { useState, useEffect, useCallback } from 'react';
import { Main, SaibaMais } from './styles';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import Modal from '../../components/Modal';
import elencoJSON from '../../assets/libertadores-palmeiras.json';
import Header from '../../components/Header';

const Home = () => {
  const [jogadores, setJogadores] = useState([]);
  const [posicoes, setPosicoes] = useState([]);
  const [idades, setIdades] = useState([]);
  const [sorter, setSorter] = useState('Todas as idades');
  const [filter, setFilter] = useState('Todas as posições');
  const [checkGols, setGols] = useState(false);
  const [checkFinal, setFinal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [jogadorIndex, setjogadorIndex] = useState(0);

  useEffect(() => {
    const posicoesList = [
      'Goleiro',
      'Zagueiro',
      'Lateral Direito',
      'Lateral Esquerdo',
      'Volante',
      'Meia',
      'Atacante',
      'Treinador'
    ];
    setPosicoes(posicoesList);

    const idadesList = ['0-19', '20-29', '30-39', '40-49'];
    setIdades(idadesList);
  }, []);

  const fezGol = useCallback(jogadores => jogadores.filter(jogador => jogador.gols > 0), []);

  const jogouFinal = useCallback(jogadores => jogadores.filter(jogador => jogador.final === 'sim'), []);

  const verificarCheckBox = useCallback((sortingJogadores, gols, final) => {
    let jogadores = sortingJogadores;

    if (gols) jogadores = fezGol(jogadores);

    if (final) jogadores = jogouFinal(jogadores);

    return jogadores;
  }, [fezGol, jogouFinal]);

  useEffect(() => {
    setJogadores([]);

    const arrJogadores = [...elencoJSON];

    let sortedJogadores;

    if (filter !== 'Todas as posições') {
      const filteredJogadores = arrJogadores.filter(jogador => jogador.posicao === filter);

      if (sorter === 'Todas as idades') {
        sortedJogadores = filteredJogadores;
      } else {
        const [idade1, idade2] = sorter.substring(0, 5).trim().split('-');
        sortedJogadores = filteredJogadores.filter(
          jogador => jogador.idade >= parseInt(idade1) && jogador.idade <= parseInt(idade2)
        );
      }
    } else {
      if (sorter === 'Todas as idades') {
        sortedJogadores = arrJogadores;
      } else {
        const [idade1, idade2] = sorter.substring(0, 5).trim().split('-');
        sortedJogadores = arrJogadores.filter(
          jogador => jogador.idade >= parseInt(idade1) && jogador.idade <= parseInt(idade2)
        );
      }
    }

    if (checkGols || checkFinal) {
      sortedJogadores = verificarCheckBox(sortedJogadores, checkGols, checkFinal);
    }

    setJogadores(sortedJogadores);
  }, [filter, sorter, checkGols, checkFinal, fezGol, jogouFinal, verificarCheckBox]);

  const handleFilter = value => setFilter(value);

  const handleSorting = value => setSorter(value);

  const handleOpenModal = index => {
    setShowModal(prev => !prev);
    handleJogadorIndex(index);
  };

  const handleJogadorIndex = index => setjogadorIndex(index);

  return (
    <Main>
      <Modal showModal={showModal} setShowModal={setShowModal} index={jogadorIndex} jogadores={jogadores} />
      <Banner />
      <Header
        handleFilter={handleFilter}
        handleSorting={handleSorting}
        setGols={setGols}
        setFinal={setFinal}
        checkGols={checkGols}
        checkFinal={checkFinal}
        posicoes={posicoes}
        idades={idades}
      />
      <section id="grid-section">
        <div className="grid-container">
          {jogadores.map((jogador, index) => (
            <div className="card-container" key={index}>
              <Card jogador={jogador} />
              <button className="saiba-mais" onClick={() => handleOpenModal(index)}>
                <SaibaMais />
              </button>
            </div>
          ))}
        </div>
      </section>
    </Main>
  );
};

export default Home;
