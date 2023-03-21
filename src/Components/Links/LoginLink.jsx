import classes from "./LoginLink.module.css";
import {NavLink} from "react-router-dom";

function LoginLink(props) {
  const styleLink = props?.style ? classes.darkLink : classes.link;
  const className = ({isActive}) => styleLink + " " + (isActive ? classes.active : "");

  return(
    <div>
      <NavLink
        className={className}
        to={props.href}
      >{props.children}</NavLink>
    </div>
  );
}

export default LoginLink;