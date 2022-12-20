import { Component } from "react";

export class A extends Component{
    render(){
        return(
            <div>
                <p>My name is {this.props.name} and city is {this.props.city}</p>
            </div>
        )
    }
}