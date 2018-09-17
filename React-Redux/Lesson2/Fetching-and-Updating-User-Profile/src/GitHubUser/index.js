import React from 'react';
import GitHubUserView from './GitHubUserView';
import GitHubUserEdit from './GitHubUserEdit';
import { getUser, patchUser } from './user';
import { keys } from '../keys';
import { decode } from '../base64';

const MODE_VIEW = 'view';
const MODE_EDIT = 'edit';

class GitHubUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: MODE_VIEW
    };
  }

  componentWillMount() {
    getUser(decode(keys.token))
    .then(this.handleResponse)
    .then(() => this.setState({ mode: MODE_VIEW }));
  }

  toggleMode = () => this.setState(
    ({ mode }) => ({
      mode: mode === MODE_VIEW ? MODE_EDIT : MODE_VIEW
    })
  );

  handleResponse = response => this.setState({ user: response });

  handleSave = data => {
    patchUser(decode(keys.token), data)
      .then(this.handleResponse)
      .then(this.toggleMode);
  };

  render() {
    const { mode, user } = this.state;
    return (
        mode === MODE_VIEW
          ? <GitHubUserView {...user} toggleMode={this.toggleMode} />
          : <GitHubUserEdit {...user} onSave={this.handleSave} onCancel={this.toggleMode}  />
    );
  }
}

export default GitHubUser;
