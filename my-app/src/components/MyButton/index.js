import React, {Component} from 'react'

class MyButton extends Component {
    state = {
        buttonValue: 'clickMe'
    }
    render() {
        return(
            <button>
               {this.state.buttonValue} 
            </button>

        )
    }
}

export default MyButton 