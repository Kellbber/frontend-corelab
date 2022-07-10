import styled, { css } from "styled-components";

export const createCar = styled.section`
${({theme})=>css`

justify-content: center;
    width: 100%;
    height: 100%;
`}
`
export const createCarContent = styled.main`
  ${() => css`
    display: flex;
    min-height: 100%;
    min-width:100%;


    align-items: center;
    flex-direction: column;
  `}
`;