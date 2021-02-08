import styled from 'styled-components';

export const InfoSectionThreeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        font-size: 80px;
        line-height: 87px;
        max-width: 547px;
        width: 100%;
        font-weight: normal;
        margin: 0 0 60px 0;
        text-align: center;
    }
    li {
        font-weight: normal;
        font-size: 16px;
        list-style: none;
        max-width: 292px;
        margin-bottom: 50px;
        p {
            font-weight: normal;
            font-size: 16px;
            line-height: 27px;
            margin-top: 11px;
        }
    }
       @media(max-width: 769px) {
        h1 {
            font-size: 40px;
            line-height: 48px;
            margin: 0 0 60px 0;
        }
        li {
            max-width: initial;
        }
    }
`;
export const ContentWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   width: 100%;
   ul {
    &:first-child {
        li {
            &:nth-child(1) {
                h3 {
                    width: 217px;
                }
                img {
                    width: 130px;
                    left: 63px;
                    top: -8px;
                } 
            }
            &:nth-child(2) {
                img {
                    width: 217px;
                    left: 45px;
                }
            }
            &:nth-child(3) {
                img {
                    width: 200px;
                    top: 10px;
                }
            }
        }
    }
     &:last-child {
        li {
            &:nth-child(1) {
                img {
                    width: 220px;
                    bottom: -10px;
                }
            }
            &:nth-child(2) {
                img {
                    width: 169px;
                    left: 60px;
                    top: 10px;
                } 
            }
            &:nth-child(3) {
                img {
                    width: 169px;
                    top: 10px;
                }
            }
        }
    }
   }
   @media(max-width: 769px) {
        flex-direction: column;
        ul {
            flex-direction: column;
        }
    }
`;

export const ImageContent = styled.div`
   display: flex;
   width: 285px;
   overflow: hidden;
   img {
        width: 285px;
        height: 610px;
        margin-top: 62px;
   }
   button {
    width: 52px;
    height: 52px;
    background: #F0F6FF;
    border-radius: 5px;
    border: none;
    &:first-child {
        margin-right: 22px;
    }
    img {
        width: 14px;
        height: 14px;
        margin: 0;
    }
   }
      @media(max-width: 769px) {
        overflow: initial;
        flex-direction: column;
        width: 100%;
        align-items: center;
        img {
            margin-top: 0;
        }
    }
`;
export const TitleWrapper = styled.div`
   display: flex;
   position: relative;
   width: 245px;
   h3 {
       font-weight: normal;
       font-size: 30px;
       z-index: 25;
   }
   img {
        height: 30px;
        position: absolute;
   }
`;
