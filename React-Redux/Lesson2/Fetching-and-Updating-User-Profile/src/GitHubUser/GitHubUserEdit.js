import React from 'react';

class GitHubUserEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      company: props.company,
      location: props.location,
      bio: props.bio,
    };
  }

  changeData = field => event => {
    this.setState({
      [field]: event.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {onSave} = this.props;
    onSave(this.state);
  };

  render() {
    const {avatar_url, login, onCancel} = this.props;

    return (
        <form>
          <div className="container d-flex">
            <div className="mr-4">
              <img src={avatar_url} className="img-fluid" alt={avatar_url}/>
              <p>{login}</p>
            </div>
            <div className="w-75">
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" value={this.state.name} onChange={this.changeData('name')}/>
              </div>
              <div className="form-group">
                <label>Company</label>
                <input type="text" className="form-control" value={this.state.company} onChange={this.changeData('company')}/>
              </div>
              <div className="form-group">
                <label>Location</label>
                <input type="text" className="form-control" value={this.state.location} onChange={this.changeData('location')}/>
              </div>
              <div className="form-group">
                <label>Bio</label>
                <textarea className="form-control" defaultValue={this.state.bio} onChange={this.changeData('bio')} />
              </div>
              <div className="d-flex justify-content-between">
                <button type="button" className="btn btn-primary" onClick={onCancel}>Cancel</button>
                <button type="submit" className="btn btn-success" onClick={this.handleSubmit}>Save</button>
              </div>
            </div>
          </div>
        </form>
    );
  }
}

export default GitHubUserEdit;