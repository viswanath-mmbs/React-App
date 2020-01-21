import React, { Component } from "react";
import Tasker from "./components/Tasker";
import TaskList from "./components/TaskList";

class App extends Component {
    render() {
        return(
            <div>
                <Tasker />
                <TaskList />
            </div>
        );
    }
}

export default App;