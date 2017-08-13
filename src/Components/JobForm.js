import React, { Component } from 'react';

class JobForm extends Component {

  constructor(props) {
    super(props)

  }

  onSubmit() {

  }

  render() {
    return (
      <div>
        <form>
          <label>
            Title:
            <input type="text" name="title" />
          </label>
          <br />
          <label>
            Description:
            <input type="textarea" name="description" />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default JobForm
