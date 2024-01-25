import { useEffect, useState } from "react";

export default function useAPI(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    setLoading(true);
    setLoaded(false);
    setError(null);

    fetch(url, { signal })
      .then((response) => response.json())
      .then((responseData) => {
        if (!signal.aborted) {
          console.log(responseData)
          setData(responseData);
          setLoaded(true);
          setLoading(false);
        }
      })
      .catch((fetchError) => {
        if (!signal.aborted) {
          setError(fetchError.message);
          setData(null);
          setLoading(false);
        }
      });

    return () => abortController.abort(); // Cleanup on component unmount

  }, [url]);

  return { data, loading, loaded, error };
}