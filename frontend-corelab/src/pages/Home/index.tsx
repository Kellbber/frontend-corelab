import AddButton from "../../components/AddButton";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
const Home = () => {
const navigate= useNavigate();
function goToAdd(){
  navigate('/create')
}
  return (
    <S.Home>
      <S.HomeContent>
        <S.HomeContentSearch>
          <S.HomeSearch>
            <img />
            <input type="text" placeholder="Buscar" />
          </S.HomeSearch>
          <S.HomeEqualizer>
            <img />
          </S.HomeEqualizer>
        </S.HomeContentSearch>
        <S.HomeButton onClick={goToAdd} >
          <AddButton />
        </S.HomeButton>
      </S.HomeContent>
    </S.Home>
  );
};

export default Home;
