import React, { useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Burger from './Burger/Burger';
import Menu from './Menu/Menu';
import Logo from '../../assets/logo.png';
import {
  HeaderContainer,
  LeftContainer,
  LogoWrapper,
  RightContainer,
} from './HeaderStyles';

const Header = () => {
  const [open, setOpen] = useState(false);
  const preventDefault = (event) => event.preventDefault();
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open]);
  return (
    <HeaderContainer>
      <LeftContainer>
        <LogoWrapper href="https://omisoft.net">
          {' '}
          <img src={Logo} alt="logo" />
          OMISOFT
        </LogoWrapper>
        <p>Telemedicine</p>
      </LeftContainer>
      <RightContainer>
        <ul>
          <li><Link smooth to="#expertise" onClick={preventDefault} color="inherit">Expertise</Link></li>
          <li><Link smooth to="#functionalities" onClick={preventDefault} color="inherit">Functionalities</Link></li>
          <li><Link smooth to="#budget" onClick={preventDefault} color="inherit">Budget</Link></li>
        </ul>
      </RightContainer>
      <Burger open={open} setOpen={setOpen} />
      {open && <Menu open={open} setOpen={setOpen} />}
    </HeaderContainer>
  );
};
export default Header;
