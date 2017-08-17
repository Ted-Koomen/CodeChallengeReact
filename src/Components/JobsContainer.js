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

  render() {

    return(
      <div>
        <div className="wrapper">
            {this.state.jobs.map( job => {
              return (
                <Job key={job.id} title={job.title} description={job.description} date={job.date_completed} urgent={job.urgent}/>
              )
            })}
        </div>
        <JobForm fetchJobs={this.fetchJobs}/>
      </div>
    )
  }
}

export default JobsContainer;
