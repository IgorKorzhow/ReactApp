import classes from "./AddExercise.module.css";
import MyLabel from "../Components/MyLabel/MyLabel";
import MyInput from "../Components/MyInput/MyInput";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import MyButton from "../Components/MyButton/MyButton";
import MyCalendar from "../Components/MyCalendar/MyCalendar";
import MySelect from "../Components/MySelect/MySelect";

function AddExercise({setExercises, ListOfexercises}) {

  const [date,setDate] = useState(new Date());
  const [muscleGroup, setmuscleGroup] = useState("");
  const [exercise, setExercise] = useState("");
  const [count, setCount] = useState("");
  const [weight, setWeight] = useState("");

  const checker = function() {
    return (muscleGroup.length > 0) && (exercise.length > 0) &&
      (count.length > 0) && (weight.length > 0);
  }

  const navigate = useNavigate();

  const goBack = (e) => {
    e.preventDefault();
    if(checker()) {
      let currentDate = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
      ListOfexercises.push([currentDate, muscleGroup, exercise, count, weight]);
      setExercises(ListOfexercises);
      navigate(-1);
    }
  }

  return (
    <form action="">
      <div>
        <div className={classes.container}>
          <MyLabel style="black" for="date">Выберите дату</MyLabel>
          <div className={classes.margin}>
            <MyCalendar date={date} setDate={setDate} type={""}/>
          </div>
          <div className={classes.margin}>
            <MyLabel style="black"  for="musclesGroup">Выберите группу мышц</MyLabel>
          </div>
          <div className={classes.margin}>
            <MySelect default="Группа не выбрана" options={[{name : "Руки", value: "arms"},
              {name : "Ноги", value: "legs"}, {name : "Грудь", value: "chest"},
              {name : "Спина", value: "back"}]}
                      value={muscleGroup} onChange={setmuscleGroup}/>
          </div>
          <div className={classes.margin}>
            <MyLabel style="black"  for="musclesGroup">Введите упражниение</MyLabel>
          </div>
          <MyInput
                   value={exercise} setValue={setExercise}
                   id="musclesGroup" type="text" placeholder="Побъем на бицепс стоя"/>
          <div className={classes.margin}>
            <MyLabel style="black"  for="count">Введите кол-во повторений</MyLabel>
          </div>
          <MyInput
            value={count} setValue={setCount}
            id="count" type="number" placeholder="3"/>
          <div className={classes.margin}>
            <MyLabel style="black"  for="weight">Введите максимальный вес</MyLabel>
          </div>
          <MyInput
            value={weight} setValue={setWeight}
            id="weight" type="number" placeholder="30"/>
          <MyButton onClick={goBack}>Добавить</MyButton>
        </div>
      </div>
    </form>
  );
}

export default AddExercise;