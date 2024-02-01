import React from 'react';
import Checkbox from '../../components/Checkbox';
import { HeaderContainer, Dropdown, Option } from './styles';

const Header = ({ handleFilter, handleSorting, setGols, setFinal, checkGols, checkFinal, posicoes, idades }) => {
  return (
    <HeaderContainer>
        <section id="menu">
        <div className="menu-box">
            <p>PUBLICADO EM 03.08.2021 • ATUALIZADO EM 04.08.2021</p>
            <p>
            Na conquista do tricampeonato da Libertadores pelo Palmeiras, candidatos a herói do título não faltaram.
            O carioca Deyverson de 30 anos saiu do banco na prorrogação para marcar o gol da vitória por 2 a 1 sobre o Flamengo e ser eleito o melhor do jogo.
            Com defesas importantes, Weverton também pode ser considerado um dos protagonistas do confronto.
            </p>

            <div className="selects">
            <div className="select-wrapper">
                <Dropdown onChange={e => handleFilter(e.target.value)}>
                <Option>Todas as posições</Option>
                {posicoes.map(posicao => (
                    <Option key={posicao}>{posicao}</Option>
                ))}
                </Dropdown>
            </div>
            <div className="select-wrapper">
                <Dropdown onChange={e => handleSorting(e.target.value)}>
                <Option>Todas as idades</Option>
                {idades.map(idade => (
                    <Option key={idade}>{idade} anos</Option>
                ))}
                </Dropdown>
            </div>
            </div>
            <div className="checkbox-wrapper">
            <div className="check-gols">
                <Checkbox
                label="Somente quem marcou gol"
                value={checkGols}
                checked={checkGols}
                onChange={({ target }) => setGols(target.checked)}
                />
            </div>
            <div className="check-final">
                <Checkbox
                label="Somente quem jogou na final"
                value={checkFinal}
                checked={checkFinal}
                onChange={({ target }) => setFinal(target.checked)}
                />
            </div>
            </div>
        </div>
        </section>
    </HeaderContainer>
  );
};

export default Header;
