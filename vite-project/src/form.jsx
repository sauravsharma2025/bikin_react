import { Component } from "react";

class Signup extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };
  render() {
    return (
      <>
        <div>
          <label>Name</label>
          <input
            value={this.state.name}
            onChange={(e) => {
              console.log(e.target.value);
              this.setState({ name: e.target.value });
            }}
            type={"text"}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type={"email"}
            value={this.state.email}
            onChange={(e) => {
              this.setState({ email: e.target.value });
            }}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type={"password"}
            value={this.state.password}
            onChange={(e) => {
              this.setState({ password: e.target.value });
            }}
          />
        </div>

        <div>
          <p>Name: {this.state.name}</p>
          <p>Email: {this.state.email}</p>
          <p>Password: {this.state.password}</p>
        </div>
      </>
    );
  }
}

export default Signup;
