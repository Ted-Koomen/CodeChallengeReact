import React, {Component} from 'react';
import axios from 'axios';
import moment from 'moment';
import DatePicker from 'react-datepicker';

class JobEditForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title:'',
      description: '',
      startDate: moment(),
      urgent: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCalendarClick = this.handleCalendarClick.bind(this);
    this.toggleCalendar = this.toggleCalendar.bind(this);
    this.handleCheckClick = this.handleCheckClick.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.handleClick()
    axios.put(`http://localhost:3000/jobs/${this.props.id}`, {
      headers:{'crossDomain':true},
      title: this.refs.title.value || this.refs.title.placeholder,
      description: this.refs.description.value || this.refs.description.placeholder,
      date_completed: this.state.startDate,
      urgent: this.state.urgent
    }).then((response) => {
      console.log(response)
      this.props.fetchJobs()
    }).catch((error) => {
      alert("There was an error. Please make sure all fields are filled!")
    })
  }

  handleCalendarClick(date) {
    this.setState({startDate: date})
    this.toggleCalendar()

  }
// toggling calendar show
  toggleCalendar(e) {
    e && e.preventDefault()
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

// handlle check box click
  handleCheckClick() {
    this.setState({urgent: true})
  }

  render() {
    return (
      <div className="job-edit">
        <form onSubmit={this.handleSubmit}>
          <input ref="title" type="text" name="title" placeholder={this.props.title
            ? this.props.title
            : "Title"}/><br/>
          <input ref="description" type="text" name="description" placeholder={this.props.description
            ? this.props.description
            : "Description"}/><br/>
          <p>Select a Date:</p>
          // displaying calendar and creating button for calendar
          <button className="example-custom-input" onClick={this.toggleCalendar}>
            {this.state.startDate.format("MM-DD-YYYY")}
          </button><br/> {this.state.isOpen && (<DatePicker selected={this.state.startDate} onChange={this.handleCalendarClick} withPortal inline/>)
}

          <input onClick={this.handleCheckClick} type="checkbox" id="urgent" name="urgent" value="true"/>
          <label for="urgent">Is this job Urgent?</label>
          <br/>
          <input type="submit" className="btn btn-2g btn-2" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default JobEditForm
