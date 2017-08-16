import React, { Component } from 'react';
import axios from 'axios';

class JobForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleInput = this.handleTitleInput.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('http://localhost:3000/jobs', {
      title: this.refs.title.value,
      description: this.refs.description.value
    })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
    this.props.fetchJobs()
    const titleForm = this.refs.title
    titleForm.value = "";
  }

  handleTitleInput() {
    this.setState(( prevState ) => {
      title: this.refs.title.value
    })
    console.log(`${this.refs.title.value}`)
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <h1 className="form-title"> Add a Job!</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              <input onChange={this.handleTitleInput} placeholder="Title" type="text" name="title" ref="title"/>
            </label>
            <br />
            <label>
              <input placeholder="Description" type="textarea" name="description" ref="description"/>
            </label>
            <br />
            <input type="checkbox" id="urgent" name="urgent" value="true" ref="urgent"/>
            <label for="urgent">Is this job Urgent?</label>
            <br />
              <input type="submit" className="btn btn-2g btn-2" value="Submit"/>
            <br />
          </form>
        </div>
      </div>
    )
  }
}

export default JobForm
