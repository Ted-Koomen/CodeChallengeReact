import React, { Component } from 'react';
import axios from 'axios';

class JobEditForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  handleSubmit() {
    axios.patch('http://localhost:3000/jobs', {

    })
  }


  render() {
    return (
      <div>
        <form>
          <input type="text" name="title" placeholder="Title"/><br/>
          <input type="text" name="description" placeholder="Description"/><br/>
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
