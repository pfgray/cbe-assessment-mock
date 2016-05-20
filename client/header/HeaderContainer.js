/*
 * A complete list of a user's (scope's) apps.
 */
import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';

const HeaderContainer = props => (<Header {...props} />);

export default connect(
  state => ({
    user: state.user
  }),
  dispatch => ({
    dispatch
  })
)(HeaderContainer);
