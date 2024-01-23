import { useEffect, useState } from "react";


export default function useAPI(url) {
    
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)    

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then(response => response.json())
            .then((data) => {
            setData(data)
            setLoading(false)
            console.log(data)
        })
        .catch((error) => {
        setError(error.message)
        setData(null)
        })
        .finally(() => {
        setLoading(false);
        })
    }, [url]);

    return { data, loading, error }
}
 
