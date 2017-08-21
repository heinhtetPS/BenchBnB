import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  // willReceiveProps()

  render()  {
    if (this.props.currentUser) {
      return (
        <div>
          <h1>Greetings, {this.props.currentUser.username}!</h1>
          <button onClick={() => this.props.logOut()}>Log out</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to='/signup'>Sign up</Link>
          <Link to='/login'>Log In</Link>
        </div>
      );
    }
  }
}

export default Greeting;
