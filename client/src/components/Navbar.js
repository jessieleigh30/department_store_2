import React from "react";
import { NavLink, } from "react-router-dom";
import { Button } from "semantic-ui-react";


const Navbar = () => (
  <nav>
    <NavLink exact activeStyle={styles.active} to="/"><Button>Home</Button></NavLink>
    {' '}
    <NavLink exact activeStyle={styles.active} to="/about"><Button>About</Button></NavLink>
    {' '}
    <NavLink exact activeStyle={styles.active} to="/departments"><Button>Departments</Button></NavLink>
  </nav>
)

const styles = {
  active: {
    textDecoration: "none",
    fontWeight: "bold",
    color: "black",
  }
};

export default Navbar;