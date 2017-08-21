import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleUsernameChange(e) {
    this.setState({ username: e.currentTarget.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.currentTarget.value });
  }

  render() {
    const header = this.props.formType === '/login' ? 'Log in' : 'Sign Up';
    let link;
    if (this.props.formType === '/login') {
      link = <Link to='/signup'>Sign Up</Link>;
    } else {
      link = <Link to='/login'>Log In</Link>;
    }
    const errors = this.props.errors.map((error, idx) => {
      return <li key={idx}>{error}</li>;
    });

    if (this.props.loggedIn) {
      return <Redirect to='/' />;
    } else {
      return (
        <div>
          <h2>{header}</h2><br />
          {link}<br />
          <ul>
            {errors}
          </ul>
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleUsernameChange}
              value={this.state.username} />
            <input type="password" onChange={this.handlePasswordChange}
              value={this.state.password} />
            <input type="submit" value={header} />
          </form>
        </div>
      );
    }
  }
}

export default withRouter(SessionForm);
