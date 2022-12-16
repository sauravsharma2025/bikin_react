import { Component } from "react";
class Copy extends Component{
    _handleInputChange = (e) => {
        const { value, name } = e.target;
        if (!name) {
          return;
        }
    
        this.setState({
          [name]: value,
        });
      };
}
export default Copy;
