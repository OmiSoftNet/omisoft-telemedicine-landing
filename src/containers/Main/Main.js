import React, { useState } from 'react';
import { MainContainer } from './MainStyles';
import Header from '../../components/Header/Header';
import InfoSection from '../../components/InfoSection/InfoSection';
import InfoSectionTwo from '../../components/InfoSectionTwo/InfoSectionTwo';
import InfoSectionThree from '../../components/InfoSectionThree/InfoSectionThree';
import Footer from '../../components/Footer/Footer';
import ModalWindow from '../../components/Modal/Modal';

const Main = () => {
  const [open, setOpen] = useState(false);

  const onToggleModal = () => {
    setOpen(!open);
  }

  return (
    <>
      <MainContainer>
        <Header />
        <InfoSection onOpenModal={onToggleModal} />
        <InfoSectionTwo />
        <InfoSectionThree />
      </MainContainer>
      <Footer onOpenModal={onToggleModal} />
      <ModalWindow openState={open} onCloseCall={onToggleModal} />
    </>
  );
};

export default Main;
