import classes from "./MyButton.module.css";

function MyButton(props) {

  const classname = props?.style ? classes.btnstyles + " " + classes.black : classes.btnstyles;

  return (
    <button onClick={props.onClick} className={classname}>{props.children}</button>
  );
}

export default MyButton;