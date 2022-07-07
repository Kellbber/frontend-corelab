import SaveButton from '../SaveButton';
import * as S from './style'
import { useNavigate } from 'react-router-dom';

const ModalCreate= () => {
let navigate = useNavigate();

function goToStart(){
  navigate('/')
}
  return (
    <S.BoxModal>
      <S.modalCreateBack>
        <img onClick={goToStart} />
      </S.modalCreateBack>
        <S.BoxModalForm1>
          <label htmlFor="nome">Nome:</label>
            <input type="text" name='nome'
            id='nome' />
            <label htmlFor="marca">Marca:</label>
            <input type="text" name='marca' id='marca' />
            <label htmlFor="nome">Cor:</label>
            <input type="text" name='cor' id='cor' />
            <label htmlFor="nome">Ano:</label>
            <input type="text" name='ano' id='placa'/>
        </S.BoxModalForm1>
        <SaveButton/>
    </S.BoxModal>
  );
}

export default ModalCreate;