import { Component } from "react"
import styles from "./style.module.css"

class Form extends Component{
    state = {
        title: "",
        completed: false
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const isNotEmpty = this.state.title

        if(isNotEmpty){
            const isEntry = {
                title: this.state.title,
                completed: false
            }
            this.props.addTodo(isEntry);
            this.setState({
                title: "",
                completed: false
            })
        }
        else{
            alert("Data masih ada yang kosong!");
        }
    }

    render(){
        return(
            <div className={styles.container}>
                <input type="text" placeholder="Add To-Do List..." value={this.state.title} name="title" onChange={(e) => {this.onChange(e)}} />
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}

export default Form