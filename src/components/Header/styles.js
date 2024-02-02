import styled from 'styled-components';
import setaBaixoIcon from '../../assets/icones/seta-baixo.svg';

const mainBorderColor = '#006437';
const backgroundColor = '#E0EFE5';
const primaryColor = '#006437';

export const HeaderContainer = styled.section`
  width: 100%;
  height: 80px;
  border-bottom: 12px solid ${mainBorderColor};
  display: flex;
  justify-content: center;
  align-items: center;
  

  .menu-box {
    width: 878px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      display: none;
    }

    .selects {
      width: 621px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .checkbox-wrapper {
      label {
        font-size: 15px;
        font-style: italic;
        letter-spacing: 0.38px;
        color: ${primaryColor};
        margin-left: 11px;
      }
    }
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    padding: 16px 0;

    .menu-box {
      width: 621px;
      display: flex;
      flex-direction: column;
      align-items: start;

      .checkbox-wrapper {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 8px;
        padding-left: 15px;
      }
    }
  }

  @media screen and (max-width: 640px) {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    padding: 16px 0;

    .menu-box {
      width: 280px;
      display: flex;
      flex-direction: column;
      align-items: start;

      p:first-of-type {
        display: block;
        color: #72BF44;
        font-family: Arial, sans-serif;
        font-size: 9px;
        font-weight: bold;
        letter-spacing: 0px;
        margin-top: 3px;
      }

      p:last-of-type {
        display: block;
        color: #006437;
        font-family: Arial, sans-serif;
        font-size: 14px;
        font-weight: normal;
        line-height: 23px;
        margin-top: 19px;
      }

      .selects {
        width: 100%;
        height: 120px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-top: 30px;

        .select-wrapper {
          width: 100%;

          select {
            width: 100%;
            height: 50px;
          }
        }
      }

      .checkbox-wrapper {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        padding-left: 15px;

        label {
          width: 101px;
          font-size: 14px;
          font-style: italic;
          letter-spacing: 0.38px;
          color: #006437;
          margin-left: 11px;
        }
      }
    }
  }
`;

export const Dropdown = styled.select`
  width: 300px;
  height: 50px;
  padding: 16px 20px;
  border-radius: 5px;
  background: #B4DDC1 url(${setaBaixoIcon}) 92.5% 50% no-repeat;
  background-size: 15px;
  color: ${primaryColor};
  font-style: italic;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:hover {
    outline: 1px solid ${primaryColor};
  }
`;

export const Option = styled.option`
  background-color: #FFFFFF;
  line-height: 50px;
  min-height: 50px;
  font-size: 15px;
  color: black;
  padding: 2px 0;

  &:hover,
  &.focus,
  &.selected.focus {
    background-color: ${backgroundColor};
  }
`;
