import classes from "./MyTable.module.css"

function MyTable({headers, exercises}) {
  return (
    <table className={classes.table_dark}>
      <thead>
        <tr>
          {headers.map((e,index) => <th key={index}>{e}</th>)}
        </tr>
      </thead>
      <tbody>
        {exercises.map((el, index) => {
          return (
            <tr key={index}>
              {el.map((e, index) => <td key={index}>{e}</td>)}
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

export default MyTable;