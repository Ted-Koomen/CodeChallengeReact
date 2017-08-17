import React, { Component } from 'react';
import axios from 'axios';

class DeleteButton extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
  }

// function to handle click and submit job for delete
  handleClick() {
    axios({
      method: 'delete',
      url: `http://localhost:3000/jobs/${this.props.id}`,
      data: {
        id: this.props.id
      }
    })
    .then(response => {
      console.log(response)
      this.props.fetchJobs()
    })
  }

  render() {
    return(
      <div className="job-actions">
        <button className={this.props.urgent ? "urgent-button button--round" : "button button--round"} onClick={this.handleClick}>Delete</button>
      </div>
    )
  }
}

export default DeleteButton;
