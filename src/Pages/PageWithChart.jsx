import React, {useState, useEffect} from 'react';
import MyChart from "../Components/MyChart/MyChart";
import MySelect from "../Components/MySelect/MySelect";
import MyLabel from "../Components/MyLabel/MyLabel";

function PageWithChart() {

  const [selectedExercise, setSelectedExercise] = useState("");
  const data = [
    {
      type: "arms",
      weight: 100,
    },
    {
      type: "arms",
      weight: 90,
    },
    {
      type: "arms",
      weight: 95,
    },
    {
      type: "arms",
      weight: 105,
    },
    {
      type: "arms",
      weight: 100,
    },
    {
      type: "arms",
      weight: 100,
    },
    {
      type: "legs",
      weight: 150,
    },
    {
      type: "legs",
      weight: 165,
    },
    {
      type: "legs",
      weight: 140,
    },
    {
      type: "legs",
      weight: 125,
    },
  ]
  const [sortedData, setSortedData] = useState(data);

  useEffect(() => {
    setSortedData([...data].filter(e => {
        if (selectedExercise === "")
          return false
        else
          return e.type === selectedExercise
      }
    ));
  },[selectedExercise]);

  return (
    <div>
      <div style={{margin: 10+"px"}}>
        <MyLabel style="black" for="nick">Выберите упражнение</MyLabel>
      </div>
      <div style={{margin: 10+"px"}}>
        <MySelect default="Сортировка не выбрана" options={[{name : "Подъем на бицепс", value: "arms"},
          {name : "Приседания", value: "legs"}, {name : "Жим", value: "chest"},
          {name : "Подтягивания с весом", value: "back"}]}
                  value={selectedExercise} onChange={setSelectedExercise}/>
      </div>
      <MyChart data={sortedData} />
    </div>
  );
}

export default PageWithChart;