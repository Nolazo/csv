import React from 'react'
import { Line } from 'react-chartjs-2'
import { 
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler, 
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

var profit =[0,11,12,90,77,60,50,45,20]
var meses = ['Enero','Febrero','Marzo']

var myData = {
  labels: meses,
  datasets:[ //cada una de las lineas del grafico
    {
      label: 'profits',
      data: profit,
      tension: 0.5,
      fill: true,
      borderColor: 'rgb(255, 99,132)',
      backgroundColor: 'rgba(255, 99,132, 0.5)',
      pointRadius: 5,
      pointBorderColor: 'rgb(255, 99,132)',
      pointBackgroundColor: 'rgb(255, 99,132)'
    }
  ]
}

var myOptions = {

}

const LinesChart = () => {
  return (
    <Line data={myData} options={myOptions}></Line>
  )
}

export default LinesChart