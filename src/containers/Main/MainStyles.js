import styled from 'styled-components';

export const MainContainer = styled.div`
    max-width: 1100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    @media(max-width: 769px) {
        padding: 18px 33px 0 33px;
        width: auto;
    }
`;