import React from 'react';
import classes from "./Programs.module.css";
import i1 from "../Images/gainWeight.jpg";
import i2 from "../Images/loseWeight.jpg";
import i3 from "../Images/arms.jpg";
import i4 from "../Images/weel.jpeg";
import LoginLink from "../Components/Links/LoginLink";



function Programs() {

  const programs = [
    {
      id: "1",
      jpeg: i1,
      header: "Программа для набора мышечной массы",
      description: "Список упражнений с количеством подходов",
      features: ["Большой объем", "Большой объем"]
    },
    {
      id: "2",
      jpeg: i2,
      header: "Программа тренировок похужения",
      description: "Список упражнений с количеством подходов",
      features: ["Высокая интенисоность"]
    },
    {
      id: "3",
      jpeg: i3,
      header: "Программа тренировок для рук",
      description: "Список упражнений с количеством подходов",
      features: ["Увеличение силовых"]
    },
    {
      id: "4",
      jpeg: i4,
      header: "Программа тренировок для спины",
      description: "Список упражнений с количеством подходов",
      features: ["Проработка низа спины"]
    },
  ]



  return (
    <div className={classes.container}>
      {
        programs.map((el) => (
          <div key={el.id} className={classes.element}>
            <header className={classes.header}>{el.header}</header>
            <div>
              <img src={el.jpeg} className={classes.jpeg} alt=""/>
            </div>
            <div>
              {el.description}
            </div>
            <ul>
              {el.features.map((feature, index) => (
                <li key={index}>
                  {feature}
                </li>
              ))}
            </ul>
            <LoginLink style="dark" href={el.id}>Читать</LoginLink>
          </div>
        ))
      }
    </div>
  );
}

export default Programs;