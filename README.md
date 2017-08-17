# JobBoard

Basic useful feature list:

 * User can add a job
 * User can select what date the job should be perforrmed
 * User can select if job is urgent, and that job will be highlighted in red
 * User can edit all properties of job


Inorder to successfully run the webapp:

 * Rails app should be started on localhost:3000
 * React app should be started on localhost:3001

Problems that were overcome:
* In creating a POST request with axios, I kept getting an error that read that there was no Access-Control-Allow-Methods for POST, although I specified it in the Rails API
* What the issue was is with:

	* ```javascript axios.patch()```
* The function sends method: "post" instead of method: "POST"
* After a couple of hours spent figuring it out, I changed to using a "PUT" method

### Stuff used to make this:

 * [React](https://facebook.github.io/react/) for all front end
 * [Moment.js](https://momentjs.com/) for saving the dates when the job should be completed
 * [React-Datepicker](https://github.com/Hacker0x01/react-datepicker) for displaying a calendar to pick the dates
 * [Rails](http://rubyonrails.org/) for quick setup of an API
