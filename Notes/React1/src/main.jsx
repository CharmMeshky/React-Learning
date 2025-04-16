import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const myRoot = document.getElementById('root')
const iranDIv = document.querySelector(".Myclaas")

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

  const test = (
    <><div>
      <h1>inja iran ast ...</h1>
    </div>
    </>
  )

  createRoot(myRoot).render(element)
  createRoot(iranDIv).render(test)
}

setInterval(() => {
  tick()
},1000)
// createRoot(document.getElementById('root')).render(
//   <h1>hello my friend</h1>
// )

