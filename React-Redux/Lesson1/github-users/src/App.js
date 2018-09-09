import React, { Component } from 'react';
import GitHubUsers from './GitHubUsers'

class App extends Component {
  render() {
    return (
        <div className="container-fluid">
          <GitHubUsers />
        </div>
    );
  }
}

export default App;
