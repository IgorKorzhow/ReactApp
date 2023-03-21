import classes from "./Exercises.module.css";
import MySelect from "../Components/MySelect/MySelect";
import {useState} from "react";
import i1 from "../Images/Exercises/Legs/1.png";
import i2 from "../Images/Exercises/Legs/2.jpg";
import i3 from "../Images/Exercises/Legs/3.jpg";
import i4 from "../Images/ArmPage/1.png";
import i5 from "../Images/ArmPage/2.jpg";
import i6 from "../Images/ArmPage/3.jpg";
import i7 from "../Images/Exercises/Back/1.png";
import i8 from "../Images/Exercises/Back/2.jpg";
import i9 from "../Images/Exercises/Back/3.jpg";
import i10 from "../Images/ArmPage/10.png";
import i11 from "../Images/ArmPage/11.jpg";
import i12 from "../Images/ArmPage/12.jpg";


function Exercises() {

  const ListOfexercises = [
    {
      group: "legs",
      header: "Приседания",
      id: "1",
      jpegs: [i1, i2, i3],
      description: "Данное упражнения часто используется с небольшим весом и большим количеством" +
        "повторений",
    },
    {
      group: "arms",
      header: "Сгибания бицепса стоя с мячом",
      id: "2",
      jpegs: [i4, i5, i6],
      description: "Данное упражнения делают с большим весом",
    },
    {
      group: "back",
      header: "Подтягивания",
      id: "3",
      jpegs: [i7, i8, i9],
      description: "Данное упражнения делают с большим весом",
    },
    {
      group: "arms",
      header: "Сгибания бицепса стоя",
      id: "4",
      jpegs: [i10, i11, i12],
      description: "Данное упражнения делают на количтсво повторений",
    },
    {
      group: "back",
      header: "Подтягивания",
      id: "3",
      jpegs: [i7, i8, i9],
      description: "Данное упражнения делают с большим весом",
    },
  ];

  const [exercises, setExercises] = useState(ListOfexercises);

  const [selectedSort, setSelectedSort] = useState("");

  const sort = (sort) => {
    setSelectedSort(sort);
    setExercises([...ListOfexercises].filter(e => {
      if (sort === "")
        return true
      else
        return e.group === sort
      }
    ));
  }

  return (
    <div>
      <div className={classes.pos}>
        <MySelect default="Сортировка не выбрана" options={[{name : "Руки", value: "arms"},
          {name : "Ноги", value: "legs"}, {name : "Грудь", value: "chest"},
          {name : "Спина", value: "back"}]}
                  value={selectedSort} onChange={sort}/>
      </div>
      <div className={classes.containerForIMG}>{
          exercises.map((exercise, index) => (
          <div key={index} className={classes.containerSub}>
            <header className={classes.header}>{exercise.header}</header>
            <div className={classes.blockING}>
              {exercise.jpegs.map((img, index) =>
                <div key={index}>
                  <img className={classes.imgExercise} src={img} alt=""/>
                </div>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Exercises;