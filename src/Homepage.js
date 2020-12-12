import React, { Component } from "react";
import axios from "axios";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }
  async componentDidMount() {
    try {
      await axios.get("https://panorbit.in/api/users.json").then((res) => {
        const data = res.data;
        console.log(data);
        this.setState({ data: data });
      });
    } catch (error) {
      alert("Failed to fetch information");
    }
  }
  render() {
    return <h1>Hello</h1>;
  }
}

export default Homepage;
