import classes from "./MyInput.module.css";

function MyInput(props) {
  return (
    <input className={classes.input}
           onChange={(e) => props.setValue(e.target.value)}
           value={props.value}
           id={props.id}
           type={props.type}
           placeholder={props.placeholder}/>
  );
}

export default MyInput;