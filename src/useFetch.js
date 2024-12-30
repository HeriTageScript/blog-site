import{useState, useEffect} from 'react'
function useFetch (url){
    const [data, setData] = useState(null)
    const [load, setLoad] = useState(true)
    const [error, setError] = useState(null)
  
    useEffect(() => {
        const abort = new AbortController()
        setTimeout(() => {
          fetch(url, {signal: abort.signal})
          .then(res => {
            if(!res.ok){
              throw Error('Its not you its me. Please try again')
            }
            return res.json()
          })
          .then(data =>{
            setData(data)
            setLoad(false)
            setError(null)
          })
          .catch(err =>{
            if(err.name === 'AbortError'){
              console.log('Abort successful')
            }else{
              setLoad(false)
              setError(err.message)
            }
          })
        }, 1000)

        return () => abort.abort();
      }, [url])

      return{data, load, error}
}

export default useFetch;
