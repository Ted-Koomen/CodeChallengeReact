import React, { Component } from 'react';

class Job extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showEdit: "false"
    }
  }



  render() {
    return (
      <div>
        <div className="wrapper">
          <ul>
            <ul>Title: {this.props.title}</ul>
            <ul>Description: {this.props.description}</ul>
            <button onClick={this.props.handleClick}>Edit</button>
          </ul>
        </div>
      </div>

    )
  }
}

export default Job;
