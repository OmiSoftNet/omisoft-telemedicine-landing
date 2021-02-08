import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
   
`;
export const LeftContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    p {
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        letter-spacing: 0.195em;
        text-transform: uppercase;
        margin-left: 27px;
    }
       @media(max-width: 769px) {
        z-index: 100;
        p {
            font-size: 14px;
        }
    }
       @media(max-width: 330px) {
        p {
            font-size: 12px;
            margin-left: 8px;
        }
    }
`;
export const RightContainer = styled.div`
    display: flex;
    width: 100%;
    z-index: 75;
    ul {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        margin: 0;
        padding: 0;
        li {
            list-style: none;
            margin-left: 88px;
            a {
            font-size: 16px;
            line-height: 16px;
            color: black;
            text-decoration: none;
            }
        }
    }
    @media(max-width: 769px) {
        display: none;
    }
`;
export const LogoWrapper = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: black;
    img {
    width: 29.8px;
    height: 37.25px;
    margin-right: 4px;
    margin-bottom: 15px;
    }
    font-size: 20px;
    font-weight: 700;
    display: flex;
    align-items: center;
        @media(max-width: 769px) {
            font-size: 16px;
        }
`;
