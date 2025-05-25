'use client';

import { useState } from 'react';
import { ButtonAdd } from './buttonAdd';
import Modal from '../../../modal'


export const AddSection = () => {

  const [modal, setModal] = useState(false)

  return (
    <>
      {modal && <Modal setModal={setModal} />}
      <ButtonAdd setModal={setModal} />
    </>
  )
}