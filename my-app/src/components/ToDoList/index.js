import React, {Component} from 'react'
import './styles.css'
import ItemList from'./component/ItemList'



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

// Capture the entered characters
    handleChangeInput =(e)=> {
        this.setState({
            valueInput: e.target.value
        })
    }


// ===================== RENDER =======================
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
                        this.state.list.map((item, index) => (
                        <ItemList 
                            key={index}
                            text={item}
                        />
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default ToDoList 