import React, { useState } from "react";
import api from '../../services/handleFetch'
import './form.scss';

function SubscribeForm() {
	const [ inputField, setInputField ] = useState({});
	const [ errorStatus, setErrorStatus ] = useState(false);
	const [ successSubmit, setSuccessSubmit ] = useState(false);
	const [loading, setLoading ] = useState(false);

function handleSubmit(e) {
	e.preventDefault()
	console.log(inputField);
	setLoading(true)
	api.post('/challenge-newsletter/', inputField)
		.then(Response => console.log(Response.status) || setSuccessSubmit(true))
		.catch(error => console.log(error.response.status) || setErrorStatus(true))
		.finally(() => setLoading(false))
}

function handleChange({ target}) {
	setInputField(
		{
			...inputField,
			[target.name]: target.value
		}
	);
}

if(successSubmit) return <h1>Thanks for Subscribe</h1>;
if(loading) return <h1>Sending..</h1>
if(errorStatus) return <h1>Something goes wrong, try again in a few minutes</h1>;

	return (
		<form onSubmit={handleSubmit}>
			<input onChange={ handleChange} type="text" name="name" />
			<input onChange={ handleChange} type="email" name="email"/>
			<input type="submit" value="Send"/>
		</form>
	)
}

export default SubscribeForm;