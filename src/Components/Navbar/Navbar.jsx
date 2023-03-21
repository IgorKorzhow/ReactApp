import React from 'react';
import classes from "./Navbar.module.css";
import MyLink from "../Links/MyLink";
import MyButton from "../MyButton/MyButton";
import LoginLink from "../Links/LoginLink";
import {Outlet} from "react-router-dom";

function Navbar(props) {
  return (
    <>
      <nav className={classes.container}>
        <div className={classes.block}>
          <h2 className={classes.header}>YourTrainer</h2>
          <MyLink href="exercises">Exercises</MyLink>
          <MyLink href="programs">Programs</MyLink>
          <MyLink href="">Main Page</MyLink>
          {
            props.login ?
              <>
                <MyLink href="results">Results</MyLink>
                <MyLink href="MyChart">MyChart</MyLink>
              </>
              :
              null
          }
        </div>
        <div className={classes.block}>
          {props.login ?
            <>
              <MyLink href="profile/12331">Profile</MyLink>
              <MyButton onClick={props.auth}>log out</MyButton>
            </>
            :
            <>
              <LoginLink href="account/singUp">sing Up</LoginLink>
              <LoginLink href="account/logIn">log In</LoginLink>
            </>
          }
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;