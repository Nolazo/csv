import { useState, useEffect } from 'react'
// import {data} from './assets/Libro1.csv'
import Papa from 'papaparse'
import './App.css'
import {Bar} from 'react-chartjs-2'
import { CategoryScale, LinearScale,
  BarElement, Title, Tooltip, Legend } from 'chart.js'

// ChartJS.register(
//   CategoryScale, LinearScale,
//   BarElement, Title, Tooltip, Legend,)

function App() {
  // const [chartData, setChartData] = useState({
  //   datasets: []
  // })
  // const [chartOptions, setChartOptions] = useState({})

  const handleSubmit = () => {
    papaParse(file_inc)

  }

  const papaParse = (inp_file) => {
    let arrayObj = []
    Papa.parse(inp_file.files[0],{
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: ((results) => {
        arrayObj = results.data
        console.log(arrayObj)
      })
    })
  }

  return (
    <div className="App">
      <h1>Upload File</h1>
      <div className='container'>
        <input type="file" id='file_inc' accept='.csv'/>
        <button className='btn' type='submit' onClick={handleSubmit}>Upload</button>
      </div>
    </div>
  )
}

export default App
