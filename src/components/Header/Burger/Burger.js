import React from 'react';
import { StyledBurger } from './BurgerStyles';

const Burger = ({ open, setOpen }) => (
  <StyledBurger open={open} onClick={() => setOpen(!open)}>
    <div />
    <div />
    <div />
  </StyledBurger>
);
export default Burger;
