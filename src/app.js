import React, { Component } from "react";
import Header from "./components/header";
import TaskList from "./components/TaskList";

class App extends Component {
    render() {
        return(
            <div>
                <Header />
                <TaskList />
            </div>
        );
    }
}

export default App;