import React, {Component} from 'react'
import './styles.css'
import ItemList from'./component/ItemList'
//import Checkbox from './Checkbox'



class ToDoList extends Component {
    state = {
        list: [],
        valueInput: ""
    }

// If something has been entered, attach it to the list
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


//===================== RENDER =======================
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
                        // Appending the entered text:
                        this.state.list.map((item, index) => (
                        <ItemList
                            key={index}
                            // text={item}. Decided refer to them as "children"
                           >{item}</ItemList>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default ToDoList 