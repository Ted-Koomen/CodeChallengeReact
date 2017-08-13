import React, { Component } from 'react';
import { Button } from 'reactstrap';

import Job from './Job';
import JobForm from './JobForm';

class JobsContainer extends Component {
  constructor(props){
    super(props)


  }

  render() {
    var job1 = {title: "Drywall", description: "Do it now."}
    var job2 = {title: "Clean windows", description: "Come tomorrow"}
    var job3 = {title: "Install sink", description: "Shit is going everywhere"}
    const jobs = [job1, job2, job3]

    return(
      <div>
        <div>
            Available Jobs:
            {jobs.map( job => {
              return <Job title={job.title} description={job.description}/>
            })}
        </div>
        <JobForm />
      </div>
    )
  }
}

export default JobsContainer;
