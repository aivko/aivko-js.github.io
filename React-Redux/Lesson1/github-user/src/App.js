import React, { Component } from 'react';
import GitHubUser from './GitHubUser';

class App extends Component {
  render() {
    return (
      <div className="container-fluid pt-3">
        <GitHubUser />
      </div>
    );
  }
}

export default App;
