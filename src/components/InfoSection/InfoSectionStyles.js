import styled from 'styled-components';

export const SectionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media(max-width: 769px) {
       padding-bottom: 60px;
     }
`;
export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    h1 {
        font-size: 5rem;
        width: 100%;
        max-width: 77%;
        font-weight: 400;
        z-index: 25;
        margin: 127px 0 14px 0;
        line-height: 87px;
    }
    p {
        font-size: 16px;
        margin: 0 0 61px 0;
        line-height: 27px;
        max-width: 490px;
        width: 100%;
    }
    button {
        background: #114FB3;
        border-radius: 5px;
        width: 242px;
        height: 63px;
        font-weight: bold;
        font-size: 18px;
        color: white;
        border: none;
    }
    @media(max-width: 769px) {
        button {
            width: 160px;
            height: 40px;
            font-size: 18px;
            border: none;
        }
         h1 {
            font-size: 24px;
            width: 100%;
            max-width: 86%;
            margin: 53px 0 14px 0;
            line-height: 36px;
        }
         p {
            z-index: 25;
            font-size: 16px;
            line-height: 24px;
            width: 86%;
         }
    }
`;
export const RightContainer = styled.div`
    background: #44EBC3;
    width: 100%;
    max-width: 47%;
    height: 723px;
    position: absolute;
    right: 0;
    top: 0;
    @media(max-width: 769px) {
      max-width: 45%;
      height: 348px;
    }
`;
export const DesktopButton = styled.button`
    cursor: pointer;
    @media(min-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        }
    @media(max-width: 767px) {
        display: none;
        }
        &:focus {
          opacity: 0.9;
        }
         &:hover {
          opacity: 0.9;
        }
`;
export const MobileButton = styled.button`
        @media(max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        }
        @media(min-width: 768px) {
        display: none;
        }
        &:focus {
          opacity: 0.9;
        }
`;
