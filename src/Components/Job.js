import React, { Component } from 'react';
import moment from 'moment'
import JobEditForm from './JobEditForm';

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
        <JobEditForm id={this.props.id} title={this.props.title} description={this.props.description} urgent={this.props.urgent}/>
      )

    }
    else{
      return null
    }
  }

  handleClick(){
    if(this.state.showEdit === false){
      return (this.setState({
        showEdit: true
      }))
    }
    else {
      this.setState(( prevState ) => {
        showEdit: false
      })
    }
  }

  render() {
    const Date = moment(this.props.date)

    return (

        <div className="item">
          <div className="job">
            <div>
              <h3 className="job-title">{this.props.title}</h3>
              <p className="job-attributes">Description: {this.props.description} <br/>Urgency: {this.props.urgent ? "Urgent" : "Not Urgent"}<br/>{Date.format('dddd, MMMM Do YYYY')}</p>
              {this.renderEdit()}
            </div>
            <div className="job-actions">
              <button className="button button--round" onClick={this.handleClick}>Edit</button>
            </div>
          </div>
        </div>


    )
  }
}

export default Job;
