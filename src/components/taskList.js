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
                    {
                        this.props.taskList.map(
                            (item, index)=> (
                                <li key={index}>{item.text}</li>
                            )
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default TaskList;