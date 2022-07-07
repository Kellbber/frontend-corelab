import styled, { css } from "styled-components";

export const createCar = styled.section`
${({theme})=>css`
background-color: ${theme.colors.textColor};
justify-content: center;
    width: 100vw;
    height: 100vh;
`}
`
export const createCarContent = styled.main`
  ${() => css`
    display: flex;
    width: 100vw;

    align-items: center;
    flex-direction: column;
  `}
`;