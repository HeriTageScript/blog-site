import{Link} from 'react-router-dom'
import './styles/index.css'
function Navbar (){
    return(
        <>
            <nav>
                <h1>Heritage Blogs</h1>
                <div className='links'>
                    <Link className='link' to='/' >Home</Link>
                    <Link className='link' to = '/new'>New Blog</Link>

                </div>
            </nav>
        </>
    )
}

export default Navbar;