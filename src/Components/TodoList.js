import React from 'react';
import TodoItem from "./TodoItem";
import NewTodoItem from "./NewTodoItem";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItems: [
                {
                    id: 1,
                    task: "Go to the store"
                },
                {
                    id: 2,
                    task: "Learn react"
                }
            ],
            projects: [
                {
                    id: 1,
                    name: "Project 1",
                    tasks: [
                        'Project 1 task one',
                        'project 2 taqsk two'
                    ]
                },
                {
                    id: 2,
                    name: "Wednesday",
                    tasks: [
                        'GO shopping',
                        'eat ramen'
                    ]
                }
            ]
        }
    }

    deleteItem = (id) => {
        const tasks = this.state.todoItems;
        const updatedTasks = tasks.filter((task) => {
            return task.id !== id;
        });
        this.setState({ todoItems: updatedTasks })
    }

    addItem = (task) => {
        const tasks = this.state.todoItems;
        tasks.push(task);
        this.setState({ todoItems: tasks })
    }

    generateTodos() {
        let todoElements = this.state.todoItems.map((item) => {
            return (
                <TodoItem key={item.id}
                    item={item}
                    deleteItem={this.deleteItem}
                >
                    {item.task}
                </TodoItem>
            )
        });
        return todoElements;
    }

    generateProjects(){
        let projectElements = this.state.projects.map((project) => {
            return (
                <Router key={project.id}>
                    <li>
                        <Link to={"/" + project.id}>{project.name}</Link>
                    </li>
                    <Route 
                        path={"/" + project.id} 
                        render={() => <Project project={project}/>}
                    />
                </Router>
            )
        })
        return projectElements;
    }

    render() {
        return (
            <div>
                {this.generateProjects()}
                <Router>
                    <li>
                        <Link to="/asdf">Home</Link>
                    </li>
                    <Route path="/asdf" exact component={Index} />
                </Router>
                <ul>
                    {this.generateTodos()}
                </ul>
                <NewTodoItem addItem={this.addItem}></NewTodoItem>

            </div>
        );
    }
}

export default TodoList;