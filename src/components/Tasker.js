import React, { Component } from "react";
import Header from './header';

var TITLE = 'Viswanath M Tasks';
class Tasker extends Component {
	render() {
        return(
        	<div>
        		<Header title = {TITLE}/>
				<label>Name</label>
				<input type="text" name="name"></input>
				<button type="submit" name="add">add</button>
        	</div>
        );
    }
}

export default Tasker;