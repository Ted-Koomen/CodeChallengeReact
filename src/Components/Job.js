import React, { Component } from 'react';
import moment from 'moment'
import JobEditForm from './JobEditForm';
import DeleteButton from './DeleteButton';

class Job extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showEdit: false
    }
    this.renderEdit = this.renderEdit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  renderEdit() {
    if(this.state.showEdit === true){
      return(
        // Render job edit form with props from specific job to autofill form
        <JobEditForm id={this.props.id} title={this.props.title} description={this.props.description} urgent={this.props.urgent}
          handleClick={this.handleClick} fetchJobs={this.props.fetchJobs}/>
      )

    }
    else{
      return null
    }
  }


  handleClick(){
    // handle click to display and hide edit form
    if(this.state.showEdit === false){
      return (this.setState({
        showEdit: true
      }))
    }
    else {
      return(this.setState({
        showEdit: false
      }))
    }
  }

  render() {
    const Date = moment(this.props.date)

    return (

        <div className={this.props.urgent ? "urgent-item" : "item"}>
          <div className="job">
            <div>
              <h3 className="job-title">{this.props.title}</h3>
              <p className="job-attributes">Description: {this.props.description} <br/>Urgency: {this.props.urgent ? "Urgent" : "Not Urgent"}<br/>{Date.format('dddd, MMMM Do YYYY')}</p>
              {this.renderEdit()}
            </div>
            <div className="job-actions">
              // determine class name based on props.urgent, if true, use urgent styling, if false, normal button
              <button className={this.props.urgent ? "urgent-button button--round" : "button button--round"} onClick={this.handleClick}>Edit</button>
            </div>
            <DeleteButton id={this.props.id} fetchJobs={this.props.fetchJobs}/>
          </div>
        </div>


    )
  }
}

export default Job;
