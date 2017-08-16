import React, { Component } from 'react';
import moment from 'moment'

class Job extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showEdit: "false"
    }

  }



  render() {
    const Date = moment(this.props.date)

    return (
      <div>
        <div className="wrapper">
          <ul>
            <ul>Title: {this.props.title}</ul>
            <ul>Description: {this.props.description}</ul>
            <ul>Date for Completion: {Date.format("dddd, MMMM Do YYYY")}</ul>
            <ul>Urgency: {this.props.urgent ? "Urgent" : "Not Urgent"}</ul>
            <button onClick={this.props.handleClick}>Edit</button>
          </ul>
        </div>
      </div>

    )
  }
}

export default Job;
