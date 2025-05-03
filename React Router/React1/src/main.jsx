/* eslint-disable react-refresh/only-export-components */
import { createRoot } from 'react-dom/client'
import Content from './content'
import Post from './posts/post'
import Gallery from './gallery/gallery'
import Todo from './todos/todo'
import './index.css'

const root = document.getElementById('root')

const Main = () => {
    return (
        <div className="main">
            <Content/>
            <Post/>
            <Gallery/>
            <Todo/>
        </div>
    )
}

createRoot(root).render(<Main/>)
