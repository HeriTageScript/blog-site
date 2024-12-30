import BlogList from './BlogList'
import useFetch from './useFetch'
function Home() {
  
  const {data:blogs, load, error} = useFetch("http://localhost:8000/blogs")
  return (
    <>
      {error && <p>{error}</p>}
      {load && <p>Loading... </p>}
      {blogs && <BlogList blogs = {blogs}/>  }
    </>
  )
}

export default Home
