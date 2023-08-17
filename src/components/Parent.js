import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  handleButtonClick = () => {
    this.setState({ showModal: true });
  };

  render() {
    return (
      <div className="parent">
        <h1>Parent Component</h1>
        <Child
          showModal={this.state.showModal}
          onButtonClick={this.handleButtonClick}
        />
      </div>
    );
  }
}

export default Parent;