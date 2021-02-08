import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { StyledMenu } from './MenuStyles';

const Menu = ({ open, setOpen }) => {
  const onClickLink = (event) => {
    event.preventDefault();
    setOpen(false);
  };
  return (
    <StyledMenu open={open}>
      <Link smooth to="#expertise" onClick={onClickLink} color="inherit">Expertise</Link>
      <Link smooth to="#functionalities" onClick={onClickLink} color="inherit">Functionalities</Link>
      <Link smooth to="#budget" onClick={onClickLink} color="inherit">Budget</Link>
    </StyledMenu>
  );
};
export default Menu;
