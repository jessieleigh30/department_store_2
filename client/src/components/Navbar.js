import React from "react";
import { NavLink, } from "react-router-dom";
import { Button, Menu } from "semantic-ui-react";
import styled from 'styled-components';


const Navbar = () => (
  <Nav>
  
    <NavLink exact activeStyle={styles.active} to="/"><NavButton>Home</NavButton></NavLink>
    {' '}
    <NavLink exact activeStyle={styles.active} to="/about"><NavButton>About</NavButton></NavLink>
    {' '}
    <NavLink exact activeStyle={styles.active} to="/departments"><NavButton>Departments</NavButton></NavLink>
    <hr/>
  </Nav>
)

const styles = {
  active: {
    textDecoration: "none",
    fontWeight: "bold",
    color: "black",
  }
};

const NavButton = styled.div `
// background-color: #EDC7B7;  
border: none;
color: black;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 25px;
border-radius: 2px;
transition: background 0.2s ease;

  &:hover {
    // background: #dc9374;
    background: #AC3B61;
    transition: background 0.2s ease;
  }
`
const Nav = styled.nav `
 margin-left: 20px;

`



export default Navbar;