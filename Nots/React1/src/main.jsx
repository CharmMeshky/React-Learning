import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

function tick(){
  const element = (
    <>
      <div>
        <h1>hello my friend</h1>
        <h2>
          {new Date().toLocaleTimeString()}
        </h2>
    </div></>
  )
  createRoot(document.getElementById('root')).render(element)
}

setInterval(() => {
  tick()
},1000)
// createRoot(document.getElementById('root')).render(
//   <h1>hello my friend</h1>
// )

