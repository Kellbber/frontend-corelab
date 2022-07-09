
import styled, {css} from "styled-components";

type cardStyle = {
  cardColor: string
}

export const CardStyle = styled.section<cardStyle>`
${({theme, cardColor})=>css`

display: flex;
  width: 30%;
  height: 40%;
  align-items: center;
  padding: 1.5rem;
  justify-content: center;
  flex-direction: column;
  background-color: ${cardColor};
  margin: 10px;
  border-radius: 15px;
  color: ${theme.colors.primaryColor} ;

  `}
`;