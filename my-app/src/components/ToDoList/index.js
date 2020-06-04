import React, {Component} from 'react'
import './styles.css'
class ToDoList extends Component {
    state = {
        list: [],
        valueInput: ""
    }
    addItemToList =()=> {
        if (this.state.valueInput){
            this.setState({
                list: [...this.state.list, this.state.valueInput],
                    valueInput: ''
            })
        }
        console.log(this.state.list)
    }
    handleChangeInput =(e)=> {
        this.setState({
            valueInput: e.target.value
        })
        console.log(e.target.value)
    }
    render () {
        return (
            <div className = "wrapper">
                <input
                value = {this.state.valueInput}
                onChange = {this.handleChangeInput}
                type="text"
                />
                <button
                onClick = {this.addItemToList}
                >
                    Add
                </button>
                <ul>
                    {
                        this.state.list.map((item, index) => (<li key={index}>(item)</li>))
                    }

                </ul>
            </div>
        )
    }
}

export default ToDoList 