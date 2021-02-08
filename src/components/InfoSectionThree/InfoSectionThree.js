import React from 'react';
import {
  ContentWrapper,
  ImageContent,
  InfoSectionThreeContainer,
  TitleWrapper,
} from './InfoSectionThreeStyles';
import Rectangle from '../../assets/Rectangle.png';
import TwoLines from '../../assets/2lines.png';
import Carousel from '../Carousel/Carousel';

const InfoSectionThree = () => (
  <InfoSectionThreeContainer id="functionalities">
    <h1>Mobile apps for Telemedicine</h1>
    <ContentWrapper>
      <ul>
        <li>
          <TitleWrapper>
            <h3>Telemedicine Apps for Doctors</h3>
            <img src={Rectangle} alt="rectangle" />
          </TitleWrapper>
          <p>With the help of mobile telemedicine applications, doctors are able to deliver faster on-demand medical care to patients wherever they are located through real-time examining and making electronic prescriptions.</p>
        </li>
        <li>
          <TitleWrapper>
            <h3>EHR Integration</h3>
            <img src={TwoLines} alt="two lines" />
          </TitleWrapper>
          <p>With EHR integration, doctors can get instant access to the medical history of a patient, clinical trials and diagnostics results which result in faster decision making and timely medical care delivery.</p>
        </li>
        <li>
          <TitleWrapper>
            <h3>Video Consultation</h3>
            <img src={Rectangle} alt="rectangle" />
          </TitleWrapper>
          <p>Thanks to video chatting patients can show their symptoms to doctors which results in an accurate diagnosis and proper treatment. Synchronous telehealth systems with screen sharing and recording functions provide real-time medical care delivery to patients and supply doctors with cutting-edge tools that help them make timely crucial decisions</p>
        </li>
      </ul>
      <ImageContent>
        <Carousel />
      </ImageContent>
      <ul>
        <li>
          <TitleWrapper>
            <h3>Telemedicine Apps for Patients</h3>
            <img src={Rectangle} alt="rectangle" />
          </TitleWrapper>
          <p>MHealth applications give your patients the ability to get first aid whenever they need it. What is more important, thanks to video chatting and live conferences patients still can get face-to-face communication with a specialist making accurate diagnoses and providing timely treatment</p>
        </li>
        <li>
          <TitleWrapper>
            <h3>Medical Device Integration</h3>
            <img src={Rectangle} alt="rectangle" />
          </TitleWrapper>
          <p>With the help of IoT technology, doctors can get instant access to clinical trials and diagnostics results. These solutions help collect patient data from various medical devices and keep them in one place so that doctors can provide appropriate treatment based on the information stored in a unified EMR system.</p>
        </li>
        <li>
          <TitleWrapper>
            <h3>Billing Integration</h3>
            <img src={Rectangle} alt="rectangle" />
          </TitleWrapper>
          <p>Integrated billing services enable you to charge remote patients and keep track of payments and cheques. Get an all-in-one solution that will help you manage important processes handled in your organization.</p>
        </li>
      </ul>
    </ContentWrapper>
  </InfoSectionThreeContainer>
);

export default InfoSectionThree;
