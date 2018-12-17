import React from "react";
import { NavLink, } from "react-router-dom";
import { Button, Menu } from "semantic-ui-react";
import styled from 'styled-components';


const Navbar = () => (
  <nav style = {{paddingTop: "20px"}}>
    <NavLink exact activeStyle={styles.active} to="/"><NavButton>Home</NavButton></NavLink>
    {' '}
    <NavLink exact activeStyle={styles.active} to="/about"><NavButton>About</NavButton></NavLink>
    {' '}
    <NavLink exact activeStyle={styles.active} to="/departments"><NavButton>Departments</NavButton></NavLink>
  </nav>
)

const styles = {
  active: {
    textDecoration: "none",
    fontWeight: "bold",
    color: "black",
  }
};

const NavButton = styled.div `
background-color: #EEE2DC;  
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 25px;
border-radius: 8px;
transition: background 0.2s ease;

  &:hover {
    background: #EDC7B7;
    transition: background 0.2s ease;
  }
`



export default Navbar;