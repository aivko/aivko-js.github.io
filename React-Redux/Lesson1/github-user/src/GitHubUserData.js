import React from 'react';

const GitHubUserData = ({userJson}) => (
    <div>
      <img className="img-fluid" src={userJson.avatar_url} alt={userJson.avatar_url}/>
      <h1>{userJson.name}</h1>
      <h2>{userJson.login}</h2>
      <p>{userJson.company}</p>
      <p>{userJson.location}</p>
      <h5>Statistics:</h5>
      <p>Repositories: {userJson.public_repos}</p>
      <p>Following: {userJson.following}</p>
      <p>Followers: {userJson.followers}</p>
    </div>
);

export default GitHubUserData;