import styled from 'styled-components';

export const QuoteSendedContainer = styled.div`
  position: absolute;
  margin-top: 150px;
  left: 50%;
  transform: translateX(-50%);
  h1 {
    font-weight: bold;
    text-align: center;
    @media (max-width: 768px) {
      font-size: 25px;
    }
  }
  p {
    font-size: 20px;
    text-align: center;
    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
  div {
    height: 70px;
    width: 70px;
    border-radius: 35px;
    background-color: #44ebc3;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px auto;
    span {
      color: white;
      font-size: 35px;
    }
  }
  @media (max-width: 768px) {
    margin-top: 100px;
    width: 80%;
  }
`;
