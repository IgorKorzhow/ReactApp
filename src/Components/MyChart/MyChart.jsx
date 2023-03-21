import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({data}) => {
  const lineChartData = {
    labels: ["Декабрь", "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
      "Июль", "Август","Сентябрь", "Октябрь", "Ноябрь"],
    datasets: [
      {
        data: data.map(e => e.weight),
        label: "Вес",
        borderColor: "#ff3333",
        backgroundColor: "rgba(255, 0, 0, 0.5)",
        fill: true,
        lineTension: 0.5
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Твой програсс в весе',
      },
    },
  };

  return (
    <Line
      width={160}
      height={50}
      options={options}
      data={lineChartData}
    />
  );
};
export default Chart;