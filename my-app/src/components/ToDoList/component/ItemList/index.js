import React, {Component} from 'react'

class ItemList extends Component {
    render () {
        return (
            <li>
                {this.props.text}
                <button>delete</button>
            
            </li>
            
        )
    }
}

export default ItemList 