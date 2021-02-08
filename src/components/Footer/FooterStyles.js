import styled from 'styled-components';

export const FooterContainer = styled.div`
    height: 400px;
    background: #44EBC3;
    width: 100%;
    padding: 165px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h1 {
        max-width: 800px;
        width: 100%;
        font-size: 80px;
        line-height: 87px;
        font-weight: normal;
        padding: 0 145px;
    }
    @media(max-width: 768px) {
        padding: 84px 0 75px 33px;
        height: auto;
        width: auto;
        h1 {
            padding: 0;
            font-size: 24px;
            line-height: 40px;
            margin-bottom: 26px;
            padding-left: 25px;
            width: auto;
        }
    }
    @media(min-width: 768px) {
        width: 100%;
    }
`;
export const PriceAndMailContent = styled.div`
    padding: 0 145px;
    display: flex;
    align-items: center;
    @media(max-width: 769px) {
        padding: 0;
        flex-direction: column;
        align-items: end;
    }
`;
export const PriceInfoBlock1 = styled.div`
    display: flex;
    width: 260px;
    height: 160px;
    justify-content: center;
    align-items: center;
    margin-right: 83px;
    p {
        font-size: 30px;
        font-weight: normal;
        display: flex;
        flex-direction: column;
        span {
            font-size: 60px;
            margin-top: 9px;
            @media(max-width: 1350px){
              font-size: 50px;
            }
        }
    }
    @media(max-width: 769px) {
        width: 200px;
        height: 130px;
        justify-content: end;
        margin-right: 0;
        padding-left: 25px; 
        p {
            font-size: 24px;
            span {
                font-size: 40px;
            }
        }
    }
`;
export const PriceInfoBlock2 = styled.div`
    display: flex;
    background: #D0FFF4;
    border-radius: 5px;
    position: relative;
    width: 260px;
    height: 160px;
    justify-content: center;
    align-items: center;
    margin-right: 143px;
    p {
        display: flex;
        flex-direction: column;
        font-size: 30px;
        font-weight: normal;
        span {
            font-size: 60px;
            margin-top: 9px;
            @media(max-width: 1350px){
              font-size: 50px;
            }
        }
        &:last-child {
            position: absolute;
            top: 23px;
            right: -75px;
            font-size: 20px;
            padding: 9px 16px 9px 0;
            background: #D0FFF4;
        }
    }
    @media(max-width: 769px) {
        margin-right: 0;
        margin-bottom: 55px;
        margin-top: 45px;
        justify-content: end;
        width: 200px;
        height: 130px;
         p {
            margin-left: 25px;
            font-size: 24px;
            span {
                font-size: 40px;
            }
            &:last-child {
                right: -58px;
                font-size: 14px;
                padding: 9px 10px 9px 0;
            }
        }
    }
`;
export const SendMailBlock = styled.div`
    display: flex;
    flex-direction: column;
    p {
        font-size: 30px;
        margin-bottom: 24px;
    }
    button {
        font-size: 30px;
        width: 242px;
        height: 63px;
        background: #114FB3;
        border-radius: 5px;
        justify-content: center;
        align-items: center;
        color: white;
        border: none;
        &:hover {
          opacity: 0.9;
        }
    }
    @media(max-width: 769px) {
        padding-left: 25px;
        p {
            font-size: 24px;
        }
        button {
            width: 160px;
            height: 40px;
            font-size: 18px;
            border: none;
        }
    }
`;
export const DesktopButton = styled.button`
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        a{
          color: white;
          text-decoration: none;
        }
`;
