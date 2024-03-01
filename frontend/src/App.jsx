import { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'

function App() {
  const [jokes,setJokes] = useState([])
    useEffect( () =>{
      axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
    })
  return (
    <>
      <h1>sudhir</h1>
      <p>JOKES:{jokes.length}</p>
      {
        jokes.map((joke,index)  => (
          <div key={joke.id}>
            <p>{joke.id}</p>
            <h3>{joke.title}</h3>
           
          </div>
        ))
      }
    </>
  )
}

export default App
