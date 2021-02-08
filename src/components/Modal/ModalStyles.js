import styled from 'styled-components';

export const ModalContainer = styled.div`
    padding: 26px;
    h2 {
        max-width: 230px;
        font-weight: normal;
        text-align: center;
        margin-bottom: 30px;
    }
    form {
        display: flex;
        flex-direction: column;
        input {
            border: none;
            border-bottom: 1px solid #E8E8E8;
            height: 40px;
            margin-bottom: 25px;
            padding: 0 10px;
            &:focus {
              border:none;
              border-bottom: 1px solid #114FB3;
              outline: none;
            }
        }
        textarea {
          border: 1px solid #E8E8E8;
          padding: 10px;
          outline: none;
          min-width: 242px;
          max-width: 242px;
              &:focus {
              border: 1px solid #114FB3;
            }
        }
        button {
            font-weight: bold;
            font-size: 18px;
            width: 242px;
            height: 63px;
            background: #114FB3;
            border-radius: 5px;
            margin-top: 40px;
            color: white;
            border: none;
        }
    }
`;
export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    button {
        &:focus {
          opacity: 0.9;
        }
        &:hover {
          opacity: 0.9;
        }
    }
`;