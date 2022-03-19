import { Component } from "react";

import styles from "./style.module.css"

import Form from "../Form";
import List from "../List";

class MainPage extends Component{
    constructor(props){
        super(props)

        this.state = {
            data : [
                {
                  id: 1,
                  title: "Mengerjakan Exercise",
                  completed: true
                },
                {
                  id: 2,
                  title: "Mengerjakan Assignment",
                  completed: false
                },
              ]
        }
    }

    addTodo = (isEntry) => {
        const newTodo = {id: this.state.data.length + 1, ...isEntry}

        this.setState({data: [...this.state.data, newTodo]})
    }

    deleteTodo = (id) => {
        const newListToDo = this.state.data.filter((item) => item.id !== id)
        this.setState({data: newListToDo})
    }

    checkTodo = (id) => {
        const newStatus = this.state.data.map((data) => {
            if(data.id === id){
                return {...data, completed: !data.completed}
            }
            else{
                return data
            }
        })
        this.setState({data: newStatus})
    }

    render(){
        return (
            <div className={styles.container}>
              <h1>To-Do List</h1>
              <Form addTodo={this.addTodo}/>
              <List todos={this.state.data} deleteTodo={this.deleteTodo} checkTodo={this.checkTodo}/>
            </div>
        );
    }
}

export default MainPage