import AppV1CC from "./AppV1FirstCC";

const cardContainer = {
  display: "flex",
  gap: 12,
  justifyContent: "space-between",
  alignItems: "center",
};

const container = {
  padding: 12,
  backgroundColor: "#e9e9e9",
};
const AppV1 = () => {
  return (
    <div style={container}>
      <p>Hello Component</p>
      <div style={cardContainer}>
        <AppV1CC name="Saurav" city="Mumbai" />
        <AppV1CC name="Sanidhya" />
        <AppV1CC name="Hareesh" city="Bangalore" />
        <AppV1CC name="Pragati" />
      </div>
    </div>
  );
};

export default AppV1;





import { Component } from "react";

const card = {
  padding: 12,
  backgroundColor: "#fff",
};
class AppV1CC extends Component {
  render() {
    return (
      <div style={card}>
        <p>
          My name is {this.props.name} and I'm from {this.props.city || "Paris"}
        </p>
      </div>
    );
  }
}

export default AppV1CC;

