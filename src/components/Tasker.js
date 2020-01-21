import React, { Component } from "react";
import Header from './header';

class Tasker extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}
	
	render() {
        return(
        	<div>
        		<Header />
				<lable>Name</lable>
				<input type="text" name="name"></input>
				<button type="submit" name="add">add</button>
        	</div>
        );
    }
}

export default Tasker;