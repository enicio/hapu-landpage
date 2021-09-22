import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import StatusSubscribe from "../statusSubscribe/statusSubscribe";
import './form.scss';

function SubscribeForm() {
	const [ inputField, setInputField ] = useState({});
	const { errorStatus, successSubmit, loading, Post } = useFetch()

function handleSubmit(e) {
	e.preventDefault()
	Post('https://api.jungledevs.com/api/v1/challenge-newsletter/', inputField)
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
		<>
			<form onSubmit={handleSubmit}>
				<input onChange={ handleChange} placeholder="your name" type="text" name="name" aria-label="name-input" required/>
				<input onChange={ handleChange} placeholder="your email" type="email" name="email" aria-label="email-input" required/>
				<input type="submit" value="Send"/>
			</form>
			<hr/>
		</>
	)
}

export default SubscribeForm;
