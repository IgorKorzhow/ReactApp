import MyCalendar from "../Components/MyCalendar/MyCalendar";
import MySelect from "../Components/MySelect/MySelect";
import {useEffect, useState} from "react";
import MyLabel from "../Components/MyLabel/MyLabel";
import classes from "./Results.module.css";
import MyTable from "../Components/Tables/MyTable";
import MyButton from "../Components/MyButton/MyButton";
import LoginLink from "../Components/Links/LoginLink";
function Results({exercises, setExercises, ListOfexercises}) {

  const TableHeader = ["Дата", "Группа мышц", "Упражнение", "Кол-во подходов", "Максимальный вес"]

  const [selectedTypeCalendar, setTypeCalendar] = useState("");
  const [selectedExercise, setExercise] = useState("");
  const [date, setDate] = useState(null);

  const sortByDate = function(currentDate) {
    if(currentDate.length > 1) {
      let arr = [];
      arr.push(Date.parse(currentDate[0].getFullYear() + "-" + currentDate[0].getMonth()
        + "-" + currentDate[0].getDate()));
      arr.push(Date.parse(currentDate[1].getFullYear() + "-" + currentDate[1].getMonth()
        + "-" + currentDate[1].getDate()));
      setExercises([...ListOfexercises].filter(e => {
          return (Date.parse(e[0]) >= arr[0]) && (Date.parse(e[0]) <= arr[1]);
        }
      ));
    } else {
      let NormalDate = Date.parse(currentDate.getFullYear() + "-" + currentDate.getMonth()
        + "-" + currentDate.getDate());
      setExercises([...ListOfexercises].filter(e => {
          return (Date.parse(e[0]) === NormalDate);
        }
      ));
    }
    setDate(currentDate);
  }

  const resetSorting = function(event) {
    event.preventDefault();
    setExercise("");
    setDate(null);
    setExercises(ListOfexercises);
  }

  useEffect(() => {
    setExercises([...exercises].filter(e => {
        if (selectedExercise === "")
          return true
        else
          return e[1] === selectedExercise
      }
    ));
  },[selectedExercise]);

  const sortByExercise = (sort) => {
    setExercise(sort);
    if (date != null)
      sortByDate(date);
    else
      setExercises(ListOfexercises);
  }


  return (
    <div className={classes.container}>
      <div>
        <div className={classes.container}>
          <div className={classes.margin}>
            <MyLabel style={"Black"}>Режим календаря :</MyLabel>
            <MySelect default="Дата" options={[{name : "Диапазон дат", value: "dateRange"}]}
                      value={selectedTypeCalendar} onChange={setTypeCalendar}/>
          </div>
          <div className={classes.margin}>
            <MyLabel style={"Black"}>Группа мышц :</MyLabel>
            <MySelect default="Сортировка не выбрана" options={[{name : "Руки", value: "arms"},
              {name : "Ноги", value: "legs"}, {name : "Грудь", value: "chest"},
              {name : "Спина", value: "back"}]}
                      value={selectedExercise} onChange={sortByExercise}/>
          </div>
        </div>
        <div className={classes.margin}>
          <MyButton onClick={resetSorting} style={"black"} >Сборосить сортировки</MyButton>
        </div>
        <div className={classes.margin}>
          <MyCalendar date={date} setDate={sortByDate} type={selectedTypeCalendar}/>
        </div>
        <div className={classes.pos}>
          <LoginLink style="dark" href="addExercise">Добавить упражнение</LoginLink>
        </div>
      </div>
      <div>
        <MyTable headers={TableHeader} exercises={exercises}/>
      </div>
    </div>
  );
}

export default Results;