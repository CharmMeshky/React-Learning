import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'

const root = document.getElementById('root')
const contantDiv = document.querySelector(".content")

// COMPONENT(class)
class App extends React.Component {
  render(){
    return (
      <div>
       <h1> hello my friend</h1>
       <h2>my name is amirhossein babaei asl</h2>
    </div>
    )
  }
}

// const element = new App()

// createRoot(root).render(element.render())

createRoot(root).render(<App/>)

class App1 extends React.Component{
  render(){
    return(
      <h2>man khodam ro moarefy kardam...</h2>
    )
  }
}
class Hello extends React.Component{
  render(){
    return (
      <div>
        <h1>salammm bar hameye dostannn</h1>
        <App1/>
      </div>
    )
  }
}

createRoot(contantDiv).render(<Hello/>)