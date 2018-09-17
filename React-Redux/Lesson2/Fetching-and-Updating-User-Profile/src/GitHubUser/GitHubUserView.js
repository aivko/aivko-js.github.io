import React from 'react';

const GitHubUserView = ({name, login, avatar_url, bio, company, location, repositories, following, followers, toggleMode}) => {
  const handleClick = (e) => {
    e.preventDefault();
    toggleMode();
  };

  return (
      <div>
        {avatar_url && <img className="img-thumbnail" src={avatar_url} alt={name}/>}
        <h1>
          {name && <a className="card-title" onClick={handleClick} href="">{name}</a>}
        </h1>
        <p>{login}</p>
        <p>Bio: {bio}</p>
        <p>Company: {company}</p>
        <p>Location: {location}</p>
        <h3>Statistics: </h3>
        <p>Repositories: {repositories}</p>
        <p>Following: {following}</p>
        <p>Followers: {followers}</p>
      </div>
  );
};

export default GitHubUserView;
