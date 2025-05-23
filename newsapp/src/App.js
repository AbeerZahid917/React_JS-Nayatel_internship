import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  // this is where the private variables are supposed to be
  c = 'john';

  render() {
    return (
      <div>
        hello my first class based component {this.c}
      </div>
    )
  }
}
