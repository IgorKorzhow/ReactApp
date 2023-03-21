import classes from "./MySelect.module.css";

function MySelect(props) {
  return (
      <select className={classes.style} value={props.value} onChange={(event) => {
        props.onChange(event.target.value);
      }}>
        <option value="">{props.default}</option>
        {props.options.map((item, index) => (
          <option key={index} value={item.value}>{item.name}</option>
        ))}
      </select>
  );
}

export default MySelect;