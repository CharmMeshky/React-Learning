import './index.css'
import { createRoot } from 'react-dom/client'
import App from './App'

const root = document.getElementById('root')
// useRef => in class component = createRef() , in function component = useRef(),
// estefade kardan az ref baraye component va dastresy peida kardan be etelaate dakhele componente farzand
const Main = () => {
  return(
    <App/>
  )
}

createRoot(root).render(<Main/>)
