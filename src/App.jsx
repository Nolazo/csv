import { useState, useEffect } from 'react'
import Papa from 'papaparse'
import './App.css'
import LinesChart from './utils/LinesChart'

function App() {

  let arrayObj = []
  const handleSubmit = () => {
    papaParse(file_inc)
  }

  const handleTest = () => {
    console.log(arrayObj)
  }

  const papaParse = (inp_file) => {
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
        <button className='btn' type='submit' onClick={handleTest}>Test</button>
        <LinesChart/>
        {arrayObj.map(element => (
            <h3>{element.Persona}</h3>
          ))
        }
      </div>
    </div>
  )
}

export default App