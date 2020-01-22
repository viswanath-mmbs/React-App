import React, { Component } from "react";

class TaskList extends Component {
    constructor(props) {
		super(props);
		this.state = {
            status : 'ALL',
            taskList : [
                { text : "First 1", completed : false},
                { text : "Second 2", completed : false},
                { text : "Third 3", completed : false},
                { text : "Fourth 4", completed : false},
                { text : "Fifth 5", completed : true}
            ]
        }
	}
    render() {

        let finalList;
        switch(this.state.status) {
            case 'ALL' :
                finalList = this.state.taskList;
                break
            case 'PENDING' :
                finalList = this.state.taskList.filter((item)=>!item.completed);
                break
            case 'COMPLETED' :
                finalList = this.state.taskList.filter((item)=>item.completed);
                break
        }
        return(
            <div>
                <div>
                    <button type="submit" name="all" onClick={()=>this.setState({status:'ALL'})}>all</button>
                    <button type="submit" name="pending" onClick={()=>this.setState({status:'PENDING'})}>pending</button>
                    <button type="submit" name="complete" onClick={()=>this.setState({status:'COMPLETED'})}>completed</button>
                </div>
                 <ul>
                    {
                        finalList.map(
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