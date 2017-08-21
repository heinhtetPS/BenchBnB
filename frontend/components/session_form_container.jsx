import { connect } from 'react-redux';
import { logIn, signUp } from '../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: !!state.session.currentUser,
  errors: state.session.errors,
  formType: ownProps.location.pathname,
});

const formFunction = (ownProps) => {
  if (ownProps.location.pathname === '/login') {
    return logIn;
  } else {
    return signUp;
  }

};

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(formFunction(ownProps)(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
