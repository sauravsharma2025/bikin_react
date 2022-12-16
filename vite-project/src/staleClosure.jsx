import { Component } from "react";
class StaleCom extends Component{
    state={
        counter:0,
    }
    // handleOnClick=()=>{
    //     this.setState({
    //         counter:this.state.counter+1
    //     })
    // }
    handleOnClick=()=>{
        this.setState((prevState) => {
            return {
              counter: prevState.counter + 1,
            };
          });
          this.setState((prevState) => {
            return {
              counter: prevState.counter + 1,
            };
          });
          this.setState((prevState) => {
            return {
              counter: prevState.counter + 1,
            };
          });
    }
    render(){
        const {counter}=this.state;
        return(
            <>
            <p>{counter}</p>
            <button onClick={this.handleOnClick}>Increment</button>
            </>
        )
    }
}
export default StaleCom;