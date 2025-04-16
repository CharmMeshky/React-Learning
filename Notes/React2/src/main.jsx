import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const root = document.getElementById('root')

const myFunction = () => {
  const x = 10
  const element = (
    <>
      <div className="folder">
         {x}
      </div>
    </>
  )

  createRoot(root).render(element)
}

myFunction() 