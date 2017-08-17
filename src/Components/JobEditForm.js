import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

class JobEditForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      startDate: moment(),
      urgent: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.patch(`http://localhost:3000/jobs/${this.props.id}`, {
      title: this.refs.title.value || this.refs.title.placeholder,
      description: this.refs.description.value || this.refs.description.placeholder

    })
    .then((response) => {

    })
    .catch((error) => {

    })
    debugger
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input ref="title"type="text" name="title" placeholder={this.props.title ? this.props.title : "Title"}/><br/>
          <input ref="description"type="text" name="description" placeholder={this.props.description ? this.props.description : "Description"}/><br/>
          <input type="checkbox" id="urgent" name="urgent" value="true"/>
          <label for="urgent">Is this job Urgent?</label>
          <br/>
          <input type="submit" className="btn btn-2g btn-2" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default JobEditForm
