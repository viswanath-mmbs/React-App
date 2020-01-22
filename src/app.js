import React, { Component } from "react";
import Tasker from "./components/Tasker";
import TaskList from "./components/TaskList";

const taskList = [
    { text : "First task", completed : false},
    { text : "Second task", completed : false},
    { text : "Third task", completed : false},
    { text : "Fourth task", completed : false},
    { text : "Fifth task", completed : true}
];
class App extends Component {
    render() {
        return(
            <div>
                <Tasker />
                <TaskList taskList = {taskList}/>
            </div>
        );
    }
}

export default App;