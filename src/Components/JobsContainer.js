import React, { Component } from 'react';
import axios from 'axios';

import Job from './Job';
import JobForm from './JobForm';
import JobEditForm from './JobEditForm';

class JobsContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      jobs: [],
      showEdit: false
    }

    this.fetchJobs = this.fetchJobs.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderJobEdit = this.renderJobEdit.bind(this);
  }

  componentDidMount() {
    axios('http://localhost:3000/jobs')
    .then((response) => {
      this.setState({
        jobs: response.data
      })
    })
  }

  fetchJobs() {
    axios('http://localhost:3000/jobs')
    .then((response) => {
      this.setState({
        jobs: response.data
      })
    })
    .catch((error) => {
      console.log(error)
    })

  }



  handleClick(e) {
    e.preventDefault()
    if (this.state.showEdit === false) {
      this.setState({showEdit: true})

    }
    else {
      this.setState({showEdit: false})
    }
  }

  renderJobEdit(props) {
    if(this.state.showEdit) {
      return(
        <JobEditForm />
      )
    }
  }


  render() {

    return(
      <div>
        <div className="jobs-wrapper">
            <p className="form-title">Available Jobs</p>
            {this.state.jobs.map( job => {
              return (
                <Job key={job.id} handleClick={this.handleClick} title={job.title} description={job.description} date={job.date_completed} urgent={job.urgent}/>
              )
            })}
            {this.renderJobEdit()}
        </div>
        <JobForm fetchJobs={this.fetchJobs}/>
      </div>
    )
  }
}

export default JobsContainer;
