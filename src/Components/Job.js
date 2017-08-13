import React, { Component } from 'react';

class Job extends Component {
  render() {
    return (
      <div>
        <ul>
          <ul>Title: {this.props.title}</ul>
          <ul>Description: {this.props.description}</ul>
        </ul>
      </div>

    )
  }
}

export default Job;
