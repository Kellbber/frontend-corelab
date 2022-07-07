import React from 'react'
import * as S from './style'
import ModalCreate from '../../components/ModalCreate'
const CreateCar = () => {
  return (
    <S.createCar>
      <S.createCarContent>
      <ModalCreate/>
      </S.createCarContent>
        
    </S.createCar>
  )
}

export default CreateCar;