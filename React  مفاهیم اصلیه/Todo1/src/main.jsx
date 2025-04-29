import { App } from './App'
import { createRoot } from 'react-dom/client'
import './index.css'

const root = document.getElementById('root')

const Main = () => {
    return (
        <div className="main">
            <App/>
        </div>
    )
}

createRoot(root).render(<Main/>)
