import { createRoot } from 'react-dom/client'
import './index.css'
import { Hello } from './Hello'

// CONTEXT

const root = document.getElementById('root')

const Main = () => {
  return(
    <div>
      <Hello/>
    </div>
  )
}

createRoot(root).render(
  <Main/>
)
