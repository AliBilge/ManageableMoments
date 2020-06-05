import React, {Component} from 'react'

class ItemList extends Component {
    render () {
        return (
            <li>
                {this.props.children}
                <button>delete</button>
            
            </li>
            
        )
    }
}

export default ItemList 