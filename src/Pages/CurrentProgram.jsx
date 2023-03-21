import classes from "./CurrntPage.module.css";
import i1 from "../Images/ArmPage/1.png";
import i2 from "../Images/ArmPage/2.jpg";
import i3 from "../Images/ArmPage/3.jpg";
import i4 from "../Images/ArmPage/4.png";
import i5 from "../Images/ArmPage/5.jpg";
import i6 from "../Images/ArmPage/6.jpg";
import i7 from "../Images/ArmPage/7.png";
import i8 from "../Images/ArmPage/8.jpg";
import i9 from "../Images/ArmPage/9.jpg";
import i10 from "../Images/ArmPage/10.png";
import i11 from "../Images/ArmPage/11.jpg";
import i12 from "../Images/ArmPage/12.jpg";


function CurrentProgram() {

  const programInfo = {
    title : "Руки",
    info: "Руки состоят из предплечий и верхней части рук. Мост основное внимание во время" +
      " тренировки будет уделяться верхней части рук, которая состоит из бицепсов и трицепсов." +
      " Предплечья естественным образом тренируются во время тренировки других групп мышц, в том " +
      "числе в упражнениях, где необходим сильный захват. Хорошо развитые трицепсы и бицепсы будут " +
      "хорошо сочетаться с хорошо развитыми плечами, создавая сильный вид верхней части тела.",
    subTitle: "Основы упражнений",
    subInfo: "Мышцы рук - одна из самых востребованных сторон для развития. Ваша верхняя часть" +
      " руки состоит на две трети из трицепса и на одну треть из бицепса, что делает трехглавую" +
      " мышцу большей из двух. Поэтому, если вы стремитесь увеличить объем своих рук, обязательно" +
      " сосредоточьтесь в большей степени на трицепсах. У мужчин обычно сильный акцент делается на" +
      " тренировке бицепсов, а не трицепсов. С другой стороны, многие женщины считают, что им " +
      "необходимо привести в тонус область трицепсов, так как со временем кожа и жир начинают " +
      "обвисать и с возрастом выглядят непривлекательно. Тонизирование трицепсов - это решение " +
      "этой распространенной проблемы. Полное развитие рук требует тренировки как бицепсов, так " +
      "и трицепсов.",
    muscles: ["Бицепсы", "Предплечья", "Трицепсы"],
    exercises: [
      {
        exTitle: "Сгибания бицепса стоя с мячом",
        images: [i1, i2, i3]
      },
      {
        exTitle: "Сгибания бицепса лежа на мяче",
        images: [i4, i5, i6]
      },
      {
        exTitle: "Сгибания бицепса лежа спиной на мяче",
        images: [i7, i8, i9]
      },
      {
        exTitle: "Сгибания бицепса стоя",
        images: [i10, i11, i12]
      },
    ]
  }

  return (
    <div>
      <div className={classes.container}>
        <div>
          <header className={classes.header}>{programInfo.title}</header>
          <section className={classes.info}>
            {programInfo.info}
          </section>
          <header className={classes.header}>{programInfo.subTitle}</header>
          <section className={classes.info}>
            {programInfo.subInfo}
          </section>
        </div>
        <div>
          <img className={classes.img} src={programInfo.exercises[0].images[0]} alt=""/>
        </div>
      </div>
      <div className={classes.containerForIMG}>
        {programInfo.exercises.map((exercise, index) => (
          <div key={index} className={classes.containerSub}>
            <header className={classes.header}>{exercise.exTitle}</header>
            <div className={classes.blockING}>
              {exercise.images.map((img, index) =>
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

export default CurrentProgram;