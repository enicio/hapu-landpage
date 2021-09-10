import React, { useState } from "react";
import api from '../../services/handleFetch'
import StatusSubscribe from "../statusSubscribe/statusSubscribe";
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

if(successSubmit) return <StatusSubscribe message="Thanks form subscribe!"/>;
if(loading) return <StatusSubscribe message="Sending..."/>;
if(errorStatus) return <StatusSubscribe message="Somethings goes wrong, try again in a few minutes."/>;

	return (
		<form onSubmit={handleSubmit}>
			<input onChange={ handleChange} type="text" name="name" />
			<input onChange={ handleChange} type="email" name="email"/>
			<input type="submit" value="Send"/>
			<hr/>
		</form>
	)
}

export default SubscribeForm;