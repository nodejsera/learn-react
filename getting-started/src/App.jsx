import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "DORA metrices",
    },
  },
};

const labels = [
  "12-12-2023",
  "13-12-2023",
  "14-12-2023",
  "15-12-2023",
  "16-12-2023",
  "17-12-2023",
  "18-12-2023",
];

const vd = [1,10,6,7,8,9,10]
const values = [{
  "12-12-2023": 1,
  "13-12-2023": 5,
  "14-12-2023": 45,
  "15-12-2023": 23,
  "16-12-2023": 15,
  "17-12-2023": 19,
  "18-12-2023": 35}
]

// labels: ["1st bar", "2nd bar", "3rd bar", "4th bar"],
//                         datasets: [
//                             {
//                                 // Label for bars
//                                 label: "total count/value",
//                                 // Data or value of your each variable
//                                 data: [1552, 1319, 613, 1400],
//                                 // Color of each bar
//                                 backgroundColor: 
//                                     ["aqua", "green", "red", "yellow"],
//                                 // Border color of each bar
//                                 borderColor: ["aqua", "green", "red", "yellow"],
//                                 borderWidth: 0.5,
//                             },
//                         ],
export const data = {
  labels,
  datasets: [
    {
      label: "Deployment Frequency",
      data: vd,
      backgroundColor: "black",
    },
  ],
};
console.log("data", data.datasets[0].data);
function App() {
  return <Bar options={options} data={data} />;
}

export default App;
