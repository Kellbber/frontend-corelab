import styled, { css } from "styled-components";

export const createCarContent = styled.section`
${({theme})=>css`
background-color: ${theme.colors.textColor};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100vw;
    height: 100vh;
`}
`