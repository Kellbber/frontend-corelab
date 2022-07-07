import styled, { css } from "styled-components";
import search from "../../assets/icons/search.png";
import equalizer from "../../assets/icons/equalizer.png";

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
  ${() => css`
    width: 100%;
    display: flex;
  `}
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
export const HomeEqualizer = styled.div`
  ${() => css`
    display: flex;
    align-self: flex-start;
    margin-top: 2.5rem;
    margin-right: 0.5rem;

    img {
      background: url(${equalizer});
      background-size: cover;
      padding: 0.5rem;
      margin-left: 0.5rem;
    }
  `}
`;
export const Modal = styled.div`

`
export const HomeButton = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  `}
`;
