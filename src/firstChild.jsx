import React from 'react';

const FirstChild = (props) => {
	console.log(props);
	return <p>{props.text}</p>;
};

export default FirstChild;
