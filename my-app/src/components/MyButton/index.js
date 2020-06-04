import React, {Component} from 'react'
import './styles.css'

class MyButton extends Component {
    state = {
        buttonValue: 'clickMe'
    }
    changeButtonValue =()=> {
        this.setState({
            buttonValue: "I clicked"
        }) 

    }
    render() {
        return(
            <button onClick={this.changeButtonValue}
            className="changeButton">
               {this.state.buttonValue} 
            </button>

        )
    }
}

export default MyButton 