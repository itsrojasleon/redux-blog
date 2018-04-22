import React, { Component } from 'react';
import '../css/index.styl';

class App extends Component {
  state = {
    color: 'red',
  };
  render() {
    return (
      <div className="something">Something</div>
    );
  }
}
export default App;
