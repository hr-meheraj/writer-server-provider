import {useEffect,useState} from 'react'

const useFetch = (url) => {
    const [data,setData] = useState([]);
    const [err, setErr] = useState(null);
    const [loading, setLoading] = useState(false);
    const getData =async apiUrl => {
        try{
            setLoading(true);
            const res = await fetch(apiUrl);
            const apiData = await res.json();
            setData(apiData);
        }catch(err){
            setErr(err.message);
        }finally{
            setLoading(false);
        }
    } 
    useEffect(() => {
        getData(url);
    },[url]);
    return {data, err, loading};
}

export default useFetch;
