import styled from 'styled-components';

export const StyledBurger = styled.button`
  position: absolute;
  top: 28px;
  right: 27px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 41px;
  height: 31px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 100;
  display: none;
  &:focus {
    outline: none;
  }
  @media (max-width: 769px) {
      display: flex;
    }
  div {
    width: 41px;
    height: 5px;
    background: ${({ open }) => (open ? 'black' : 'black')};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    display: flex;
    align-items: center;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
      width: 41px;
      bottom: 1px;
      margin-bottom: ${({ open }) => (open ? '7px' : '6px')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
      width: 32px;
      margin-bottom: 7px;
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
      width: ${({ open }) => (open ? '41px' : '24px')};
    }
  }
`;
