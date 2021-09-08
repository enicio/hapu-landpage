import React, { useState } from "react";
import './form.scss';

function SubscribeForm() {
	const [ inputField, setInputField ] = useState({});

function handleSubmit(e) {
	e.preventDefault()
	console.log(inputField);
}

function handleChange({ target}) {
	setInputField(
		{
			...inputField,
			[target.name]: target.value
		}
	);
}

	return (
		<form onSubmit={handleSubmit}>
			<input onChange={ handleChange} type="text" name="name" />
			<input onChange={ handleChange} type="email" name="email"/>
			<input type="submit" value="Send"/>
		</form>
	)
}

export default SubscribeForm;