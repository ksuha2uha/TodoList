import React from "react";
import "./item-status-button.css"

export default class Button extends React.Component{
    render () {
        return (
            <div className="item-status-button">
                <button className="btn btn-info">All</button>
                <button className="btn btn-outline-secondary">Active</button>
                <button className="btn btn-outline-secondary" onClick={this.props.checkDoneItem}>Done</button>
            </div>
        )
    }
}

// const Button = () => {
//     return (
//         <div className="item-status-button">
//             <button className="btn btn-info">All</button>
//             <button className="btn btn-outline-secondary">Active</button>
//             <button className="btn btn-outline-secondary">Done</button>
//         </div>
//     )
// }
//             export default Button;