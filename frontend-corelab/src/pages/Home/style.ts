import styled, { css } from "styled-components";
import search from "../../assets/icons/search.png";
import equalizer from "../../assets/icons/equalizer.png";
import edit from '../../assets/icons/edit.png'

export const Home = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.shadowColor};
    min-height: 100vh;
    min-width: 100vw;
    display: flex;

    justify-content: center;
  `}
`;

export const HomeContent = styled.main`
  ${({ theme }) => css`
    display: flex;
    min-width: 50%;
    background-color: ${theme.colors.primaryColor};
    align-items: flex-start;
    flex-direction: column;
  `}
`;
export const HomeContentSearch = styled.div`
  width: 100%;
  display: flex;
`;
export const HomeSearch = styled.div`
  ${({ theme }) => css`
    margin-top: 2rem;
    margin-left: 0.5rem;
    display: flex;
    gap: 10px;
    background-color: ${theme.colors.baseBg1};
    width: 90%;
    border-radius: 2rem;

    input {
      background: transparent;
      border: none;

      width: 100%;
      padding: 0.5rem;
      color: ${theme.colors.textColor};
      outline: none;
      font-family: ${theme.constants.bodyFontFamily};
    }
    img {
      background: url(${search});
      background-size: contain;
      background-repeat: no-repeat;
      padding: 0.5rem;
      margin-left: 0.5rem;

      align-self: center;
    }
  `}
`;
export const HomeEqualizer = styled.button`
  display: flex;
  align-self: flex-start;
  margin-top: 2.5rem;
  margin-right: 0.5rem;
  border: none;
  background-color: transparent;
  cursor: pointer;

  img {
    background: url(${equalizer});
    background-size: cover;
    padding: 0.5rem;
    margin-left: 0.5rem;
  }
`;
export const HomeButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const HomeCarList = styled.div`
  width: 100%;
  margin-top: 25px;
  padding-bottom: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

export const HomeFilterModal = styled.form`
  ${({ theme }) => css`
    display: flex;
    width: 100%;

    justify-content: center;
    flex-direction: column;
    align-items: center;

    select {
      width: 20%;
      outline: none;
      background-color: ${theme.colors.primaryColor};
      border-radius: 2rem;
    }
  `}
`;

