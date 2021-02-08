import styled from 'styled-components';

export const ApplyFormContainer = styled.div`
    padding: 18px 33px 0 33px;
    width: -webkit-fill-available;
    h2 {
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
        }
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;
export const SendButton = styled.button`
    font-weight: bold;
    font-size: 18px;
    width: 242px;
    height: 63px;
    background: #114FB3;
    border-radius: 5px;
    margin-top: 40px;
    color: white;
    margin-bottom: 41px;
`;
export const BackButton = styled.button`
    font-size: 18px;
    font-weight: bold;
    background: transparent;
    border: none;
`;
