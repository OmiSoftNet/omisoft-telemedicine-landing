import React from 'react';
import {
  DoctorImage,
  InfoSectionTwoContainer,
  ListElement
} from './InfoSectionTwoStyles';
import Doctor from '../../assets/doctor.png';

const InfoSectionTwo = () => (
  <InfoSectionTwoContainer id="expertise">
    <DoctorImage src={Doctor} />
    <ul>
      <ListElement color="#F0F6FF">
        <h1>Here are several benefits</h1>
        <p>that you will get with such solutions:</p>
        <p>Optimized processes of workflow management within your organization;</p>
        <p>Increased satisfaction of your employes thanks to mobility and modern tools used at their workplaces;</p>
        <p>Saved time and material resources;</p>
        <p>data security and privacy;</p>
        <p>Increased loyalty of patients and revenue.</p>
      </ListElement>
      <ListElement color="#F0F6FF">
        <h1>We offer scalable solutions</h1>
        <p>for their further enhancement to help you follow all modern directions in the healthcare industry and stay among leaders of care delivery providers.</p>
      </ListElement>
      <ListElement>
        <h1>We are ready to assist you</h1>
        <p>in creating custom solutions to provide patients with mobile tools for multi-purpose healthcare delivery. Making appointments, keeping track of clinical trial and survey results and getting consultations has never been as easy as with telemedicine solutions.</p>
      </ListElement>
    </ul>
  </InfoSectionTwoContainer>
);

export default InfoSectionTwo;
