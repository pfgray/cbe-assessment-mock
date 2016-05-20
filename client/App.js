/*
 * Entry file for the App.
 */
import React from 'react';

import './styles/main.less';

import Header from './Header';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
