import classes from "./MyLabel.module.css";

function MyLabel(props) {

  const classname = props?.style ? classes.label + " " + classes.black : classes.label;

  return (
    <label
           className={classname}
           htmlFor={props.for}
    >{props.children}</label>
  );
}

export default MyLabel;