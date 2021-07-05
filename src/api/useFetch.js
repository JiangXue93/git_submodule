import { useState, useEffect } from 'react';
import * as RequestFuns from './index'

const useFetch = (apiName, params) => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await RequestFuns[apiName](params);
        setResponse(res);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  },[])

  return { response, error };
}

export default useFetch;