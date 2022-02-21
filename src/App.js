import React,{useState, useEffect} from 'react'
import axios from 'axios'
import './App.css'

function App() {
const [Advice, setAdvice] = useState('')
const [click, setClick] = useState(false)
useEffect(()=>{
 //console.log("Effect")
 //setAdvice(false)
 fetchAdvice()
},[])

const fetchAdvice = ()=>{
    console.log('clicked')
   axios.get("https://api.adviceslip.com/advice")
        .then((res)=>{
           setAdvice(res.data.slip.advice)
           console.log(res.data.slip.advice)
        })
        .catch((error)=>{
           console.error(error)
        })
}


  return (
    <div className='app'>
        <div className='card'>
            <h1 className='heading'>{Advice}</h1>
            <button className='button' onClick={fetchAdvice}>
                <span>Give me Advice</span>
            </button>
        </div>
    </div>
  )
}

export default App
