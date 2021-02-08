import styled from 'styled-components';

export const InfoSectionTwoContainer = styled.div`
    display: flex;
    min-height: 1030px;
    height: 100%;
    position: relative;
    margin-bottom: 178px;
    ul {
        display: flex;
        align-items: flex-end;
    }
    @media(max-width: 769px) {
        padding-top: 40px;
        min-height: auto;
        margin-bottom: 26px;
        ul {
        width: 100%;
            flex-direction: column;
        }
    }
`;
export const DoctorImage = styled.img`
    width: 630px;
    height: 630px;
    position: absolute;
    right: 0;
    border-radius: 8px;
    @media(max-width: 769px) {
        display: none;
    }
`;
export const ListElement = styled.li`
   background: ${({ color }) => (color || '#CDE1FF')};
   max-width: 350px;
   width: 100%;
   min-height: 215px;
   list-style: none;
   position: relative;
   padding: 53px 33px 33px 33px;
       &:not(:last-child) {
           @media(min-width: 769px) {
               margin-right: 30px;
           }
       }
   h1 {
    position: absolute;
    top: -40px;
    font-size: 30px;
    line-height: 36px;
    font-weight: normal;
    max-width: 262px;
   }    
   p {
    font-size: 16px;
    line-height: 27px;
   }
   &:first-child {
       p {
       margin-bottom: 23px;
       position: relative;
           &::before {
                content: "";
                background: #F7CF6D;
                display: inline-block;
                width: 5px;
                height: 5px;
                border-radius: 100px;
                position: absolute;
                left: -10px;
                bottom: 10px;
           }
       }
   }
   @media(max-width: 769px) {
       min-height: auto;
       padding: 50px 30px 30px 30px;
       width: 100%;
       max-width: fit-content;
       margin-bottom: 70px;
            p {
                font-size: 16px;
                line-height: 27px;
            }  
   }
`;
