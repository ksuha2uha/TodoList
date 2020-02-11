import React, {Component} from "react";
import "./app-seacrh-input.css"



export default class Input extends Component {
     state = {
         term: ""
     }

    onSearchChange = (e) => {
         const term = e.target.value;
         this.setState({ term });
         this.props.onSearchChange(term);
    }

    render() {
        return (
            <input className="app-search-input"
                   placeholder="type to search"
                   type='text'
                   value={this.state.term}
                   onChange={this.onSearchChange}

            />

        )

    }

}