import React from 'react';

const CreateMessageInput = () => {

	const handleKeyUp =(event) => {
		console.log(event.key);
	}
	return (<input onKeyUp = {handleKeyUp} placeholder="Type a Messfsdfsdfage.."/>);
}

export default CreateMessageInput;
