import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-responsive-modal';
import { useHistory } from 'react-router-dom';
import 'react-responsive-modal/styles.css';
import { ButtonWrapper, ModalContainer } from './ModalStyles';
import { api } from '../../constants/api';

const ModalWindow = ({ openState, onCloseCall }) => {
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
    onCloseCall()
    // axios
    //   .post(api, values)
    //   .then((response) => {
    //     onCloseCall();
    //     history.push('/quote-sended');
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };
  return (
    <Modal open={openState} onClose={onCloseCall} center>
      <ModalContainer>
        <h2>Tell us more about your project!</h2>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} type="text" name="full_name" placeholder="Your Name" required />
          <input onChange={handleChange} type="email" name="email" placeholder="E-mail" required />
          <textarea onChange={handleChange} name="comment" placeholder="Description of your project" />
          <ButtonWrapper>
            <button
              type="submit"
            >
              Send
            </button>
          </ButtonWrapper>
        </form>
      </ModalContainer>
    </Modal>
  );
};
export default ModalWindow;
