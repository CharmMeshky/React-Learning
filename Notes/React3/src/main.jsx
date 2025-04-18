import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Component } from 'react'
import React from 'react'

const myRoot = document.querySelector(".root")

setInterval(() => {
  timing()
},1000)

function timing(){
  class Moarefy extends React.Component{
    render(){
      return (
        <h1 className='hello'> hello my friend </h1>
      )
    }
  }
  
  class Welcome extends React.Component{
    render(){
      return(
        <h2 className='welcome'>welcome to IRAN</h2>
      )
    }
  }
  
  class Timer extends React.Component{
    render(){
      return (
        <div className='date'>
          {new Date().toLocaleTimeString()}
        </div>
      )
    }
  }
  
  class Show extends React.Component{
    render(){
      return (
        <div className='flex'>
          <div className="text">
           <Moarefy/>
           <Welcome/>
          </div>
          <Timer/>
        </div>
      )
    }
  }

  createRoot(myRoot).render(<Show/>)
}
