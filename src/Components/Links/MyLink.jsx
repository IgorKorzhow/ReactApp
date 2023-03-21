import React from 'react';
import classes from "./MyLink.module.css";
import {NavLink} from "react-router-dom";

function MyLink(props) {

  const className = ({isActive}) => classes.link + " " + (isActive ? classes.active : "");
  return (
    <div>
      <NavLink className={className} to={props.href}>{props.children}</NavLink>
    </div>
  );
}

export default MyLink;