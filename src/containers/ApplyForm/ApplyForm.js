import React, { useState } from 'react';
import axios from 'axios';
import 'react-responsive-modal/styles.css';
import { Link, useHistory } from 'react-router-dom';
import { api } from '../../constants/api';
import {
  ApplyFormContainer,
  BackButton,
  ButtonWrapper,
  SendButton
} from './ApplyFormStyles';
import Header from '../../components/Header/Header';

const ApplyForm = () => {
  const [values, setValues] = useState({ interest: 'TELEMEDICINE' });
  const history = useHistory();
  const handleChange = (event) => {
    const { value } = event.target;
    setValues({
      ...values,
      [event.target.name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(api, values)
      .then((response) => {
        console.log(response);
        history.push('/quote-sended');
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <ApplyFormContainer>
      <Header />
      <h2>
        Tell us more about
        <br /> your project!
      </h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="full_name" placeholder="Your Name" required />
        <input onChange={handleChange} type="email" name="email" placeholder="E-mail" required />
        <input onChange={handleChange} type="text" name="comment" placeholder="Description of your project" />
        <ButtonWrapper>
          <SendButton type="submit">Send</SendButton>
          <Link to="/">
            <BackButton type="button">Back</BackButton>
          </Link>
        </ButtonWrapper>
      </form>
    </ApplyFormContainer>
  );
};
export default ApplyForm;
