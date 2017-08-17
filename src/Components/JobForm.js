import React, {Component} from 'react';
import axios from 'axios';
import moment from 'moment';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';

class JobForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      startDate: moment(),
      contactNumber:'',
      urgent: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleInput = this.handleTitleInput.bind(this);
    this.handleCalendarClick = this.handleCalendarClick.bind(this);
    this.toggleCalendar = this.toggleCalendar.bind(this);
    this.handleCheckClick = this.handleCheckClick.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('http://localhost:3000/jobs', {
      title: this.refs.title.value,
      description: this.refs.description.value,
      date: this.state.startDate,
      urgent: this.state.urgent,
      phoneNumber: this.refs.phoneNumber.value
    }).then((response) => {
      const titleForm = this.refs.title
      const descriptionForm = this.refs.description
      const phoneNumber = this.refs.phoneNumber
      this.props.fetchJobs()
      titleForm.value = ""
      descriptionForm.value = ""
      phoneNumber.value = ""
      console.log(response)
    }).catch((error) => {
      alert("There was an error. Please make sure all fields are filled!")
      console.log(error.data)
    })
  }

  handleTitleInput() {
    this.setState((prevState) => {
      title : this.refs.title.value
    })
  }

  handleCalendarClick(date) {
    this.setState({startDate: date})
    this.toggleCalendar()

  }

  toggleCalendar(e) {
    e && e.preventDefault()
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  handleCheckClick() {
    if (!this.state.urgent) {
      return this.setState({urgent: true})
    } else {
      return this.setState(prevState => {
        urgent : false
      })
    }

  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <h1 className="form-title">
            Add a Job!</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              <input onChange={this.handleTitleInput} placeholder="Title" type="text" name="title" ref="title"/>
            </label>
            <br/>
            <label>
              <input placeholder="Description" type="textarea" name="description" ref="description"/>
            </label>
            <br/>
            <label>
              <input placeholder="Phone Number" type="text" name="number" ref="phoneNumber"/>
            </label>
            <p>Select a Date:</p>
            <button className="example-custom-input" onClick={this.toggleCalendar}>
              {this.state.startDate.format("MM-DD-YYYY")}
            </button><br/> {this.state.isOpen && (<DatePicker selected={this.state.startDate} onChange={this.handleCalendarClick} withPortal inline/>)
}
            <input onClick={this.handleCheckClick} type="checkbox" id="urgent" name="urgent" ref="urgent"/>
            <label for="urgent">Is this job Urgent?</label>
            <br/>
            <input type="submit" className="btn btn-2g btn-2" value="Submit"/>
            <br/>
          </form>
        </div>
      </div>
    )
  }
}

export default JobForm
