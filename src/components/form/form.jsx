import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import StatusSubscribe from "../statusSubscribe/statusSubscribe";
import './form.scss';

function SubscribeForm() {
	const [ inputField, setInputField ] = useState({});
	const { errorStatus, successSubmit, loading, Post } = useFetch()

function handleSubmit(e) {
	e.preventDefault()
	console.log(inputField);
	Post('/challenge-newsletter/', inputField)
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
				<input onChange={ handleChange} type="text" name="name" />
				<input onChange={ handleChange} type="email" name="email"/>
				<input type="submit" value="Send"/>
			</form>
			<hr/>
		</>
	)
}

export default SubscribeForm;
