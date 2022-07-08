
import styled, {css} from "styled-components";
export const CardStyle = styled.section`
${({theme})=>css`

display: flex;
  width: 50%;
  height: 30%;
  align-items: center;
  padding: 1.5rem;
  justify-content: center;
  flex-direction: column;
  background-color: gray;
  margin: 10px;
  border-radius: 15px;
  color: ${theme.colors.primaryColor} ;

  `}
`;