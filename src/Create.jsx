import { useState } from 'react'
import{Link} from 'react-router-dom'
import{useNavigate} from 'react-router-dom'
import './styles/index.css'
function Create(){
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('Heritage')
    const [load, setLoad] = useState(false)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        setLoad(true)
        const blog = {title, body, author} 
        fetch('http://localhost:8000/blogs/', {
            method:'POST',
            headers:{'Content-type': 'application/json'},
            body:JSON.stringify(blog)
        }).then(()=>{
            setLoad(false)
            navigate('/')
        })
    }

    return(
        <div className='create'>
            <form onSubmit={handleSubmit} action="post">
                <h1>Add new blog</h1>

                <label >Blog title:</label>
                <input
                    type="text" 
                    value={title}
                    required
                    onChange={(e) =>{setTitle(e.target.value)}}
                />
                <label>Body:</label>
                <textarea 
                    value={body}
                    onChange={(e) =>{setBody(e.target.value)}}
                    required></textarea>
                <label >Blog author:</label>
                <select 
                    value={author}
                    onChange={(e) =>{setAuthor(e.target.value)}}

                >
                    <option value="Heritage">Heritage</option>
                    <option value="Temitope">Temitope</option>
                </select>
                {!load && <button>Add blog</button>}
                {load && <button>Loading</button>}
            </form>


        </div>
           
    )
}
export default Create