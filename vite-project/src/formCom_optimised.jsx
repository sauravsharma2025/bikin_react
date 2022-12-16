import { Component } from "react";
class DemoForm extends Component{
    state={
        name:"",
        city:"",
        coun
    }
    handleUpdateCounter=()=>{

    }
    _handleInputChange = (e) => {
        const { value, name } = e.target;
        if (!name) {
          return;
        }
    
        this.setState({
          [name]: value,
        });
      };
    render(){
        const {name,city}=this.state
        return(
            <>
             <label htmlFor="name">Name</label>
             <input
            type={"text"}
            value={name}
            name="name"
            onChange={this._handleInputChange}
          
          />
            <p>Name:{name}</p>
            </>
        )
    }
}
export default DemoForm