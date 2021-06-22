import React, {Component} from 'react';
import ChildComponent from './firstChild';

class ParentComponent extends Component {
	render() {
		return(
			<div>
				<h1>I'm the parent component.</h1>
				<h3><ChildComponent text='I am the 1st child'/></h3>
				<h3><ChildComponent text='I am the 2nd child'/></h3>
				<h3><ChildComponent text='I am the 3rd child'/></h3>
			</div>
		)
	}
}

export default ParentComponent;
