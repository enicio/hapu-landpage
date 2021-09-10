import { useState } from 'react';
import api from '../services/handleFetch'

function useFetch() {
	const [ errorStatus, setErrorStatus ] = useState(false);
	const [ successSubmit, setSuccessSubmit ] = useState(false);
	const [loading, setLoading ] = useState(false);

  function Post(url, inputField) {
    setLoading(true)
    api.post(`${url}`, inputField)
      .then(Response => console.log(Response.status) || setSuccessSubmit(true))
      .catch(error => console.log(error.response.status) || setErrorStatus(true))
      .finally(() => setLoading(false))
  }

  return { errorStatus, successSubmit, loading, Post}
}

export default useFetch;
