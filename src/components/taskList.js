import React, { Component } from "react";

class TaskList extends Component {
    constructor(props) {
		super(props);
		this.state = {
            data : []
        };
	}
    render() {
        return(
            <div>
                <div>
                    <button type="submit" name="all">all</button>
                    <button type="submit" name="pending">pending</button>
                    <button type="submit" name="complete">complete</button>
                </div>
                <ul>
                    <li>First 
                        <button type="submit" name="done">done</button>
                        <button type="submit" name="delete">delete</button>
                    </li>
                    <li>Second 
                        <button type="submit" name="done">done</button>
                        <button type="submit" name="delete">delete</button>
                    </li>
                    <li>Third     
                        <button type="submit" name="done">done</button>
                        <button type="submit" name="delete">delete</button>
                    </li>
                    <li>Fourth -     
                        <button type="submit" name="done">done</button>
                        <button type="submit" name="delete">delete</button>
                    </li>
                    <li>Fifth     
                        <button type="submit" name="done">done</button>
                        <button type="submit" name="delete">delete</button>
                    </li>
                </ul>
            </div>
        );
    }
}

export default TaskList;