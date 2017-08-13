import React, { Component } from 'react';

class JobForm extends Component {

  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <h1 className="form-title"> Add a Job!</h1>
          <form>
            <label>
              <input placeholder="Title" type="text" name="title" />
            </label>
            <br />
            <label>
              <input placeholder="Description" type="textarea" name="description" />
            </label>
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
