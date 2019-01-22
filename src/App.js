import React, {Component} from 'react';
import "./styles/todoList.css";
import AddTodo from "./components/AddTodo";
import VisibleTodoList from "./components/VisibleTodoList";
import FilterLink from "./components/FilterLink";

class App extends Component {
    render() {
        return (
            <div className="App" style={{width: '600px', margin: '100px auto'}}>
                <AddTodo/>
                <FilterLink/>
                <VisibleTodoList/>
            </div>
        );
    }
}

export default App;
