import { useState } from 'react';
//import api from '../services/handleFetch';
import axios from 'axios';

function useFetch() {
	const [ errorStatus, setErrorStatus ] = useState(false);
	const [ successSubmit, setSuccessSubmit ] = useState(false);
	const [loading, setLoading ] = useState(false);

  function Post(url, inputField) {
    setLoading(true)
    axios.post(`${url}`, inputField)
      .then(Response => setSuccessSubmit(true))
      .catch(error => setErrorStatus(true))
      .finally(() => setLoading(false))
  }

  return { errorStatus, successSubmit, loading, Post}
}

export default useFetch;
