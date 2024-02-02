import { useState, useEffect } from 'react';
import { Container, CloseModalButton, StepButton } from './styles';

import CardExpanded from '../CardExpanded';
import CardExpandedMobile from '../CardExpandedMobile';

import useWindowSize from '../../Hooks/useWindowSize';

import rightArrow from '../../assets/icones/seta-direita.svg';
import lefttArrow from '../../assets/icones/seta-esquerda.svg';

const Modal = ({ showModal, setShowModal, index, jogadores }) => {

    const [activeIndex, setActiveIndex] = useState(0);
    
    const hasNextItemLeft = activeIndex <= 0;
    const hasNextItemRight = activeIndex >= jogadores.length - 1;

    useEffect(() => {
        setActiveIndex(index);
    }, [index]);

    const handleLeftArrowClick = () => {
        if (!hasNextItemLeft) {
            setActiveIndex(activeIndex - 1);
        }
    };

    const handleRightArrowClick = () => {
        if (!hasNextItemRight) {
            setActiveIndex(activeIndex + 1);
        }
    };

    const windowSize = useWindowSize();
    console.log(windowSize.width);
    
    const closeModal = () => {
        setShowModal(false);
        setActiveIndex(index);
    };

    return (
        <>
            {showModal ? (
                <Container className={showModal ? 'fade-in' : ''}>
                    <div className="expCard-container">
                        {windowSize.width > 600 ? (
                            <CardExpanded jogador={jogadores[activeIndex]} />
                        ) : (
                            <CardExpandedMobile jogador={jogadores[activeIndex]} />
                        )}
                        <button className="close-buttom" onClick={closeModal}>
                            <CloseModalButton/>
                        </button>
                        <div className="steps-buttons">
                            <button onClick={handleLeftArrowClick} disabled={hasNextItemLeft}>
                                <StepButton>
                                    <div className="arrow-before">
                                        <img src={lefttArrow} alt="Arrow Left" />
                                    </div>
                                    <p>Anterior</p>
                                </StepButton>
                            </button>
                            <button onClick={handleRightArrowClick} disabled={hasNextItemRight}>
                                <StepButton>
                                    <div className="arrow-after">
                                        <img src={rightArrow} alt="Arrow Right" />
                                    </div>
                                    <p>Próximo</p>
                                </StepButton>
                            </button>
                        </div>
                    </div>
                </Container>
            ) : null}
        </>
    );
}

export default Modal;