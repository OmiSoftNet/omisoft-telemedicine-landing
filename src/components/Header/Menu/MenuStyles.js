import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #44EBC3;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 100vh;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 75;
  transition: transform 0.3s ease-in-out;
  @media (max-width: 768px) {
      width: 100%;
    }

  a {
    font-size: 24px;
    font-weight: normal;
    letter-spacing: 0.5rem;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 768px) {
      font-size: 24px;
      text-align: center;
      font-weight: 400;
      padding: 0;
      padding-bottom: 62px;
    }

    &:hover {
      color: #343078;
    }
  }
`;
