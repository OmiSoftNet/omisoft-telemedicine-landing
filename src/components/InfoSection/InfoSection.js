import React from 'react';
import { Link } from 'react-router-dom';
import {
  DesktopButton,
  LeftContainer,
  MobileButton,
  RightContainer,
  SectionContainer,
} from './InfoSectionStyles';

const InfoSection = ({ onOpenModal }) => (
  <SectionContainer>
    <LeftContainer>
      <h1>Telemedecine saves lives during the COVID-19</h1>
      <p>Ability to get an online consultation with a doctor, have instant access to all clinical trials and prescriptions could be a great solution for clinics during the crisis time.</p>
      <DesktopButton onClick={onOpenModal} type="button">Get a quote</DesktopButton>
      <Link to="/apply-form">
        <MobileButton type="button">Get a quote</MobileButton>
      </Link>
    </LeftContainer>
    <RightContainer />
  </SectionContainer>
);
export default InfoSection;
