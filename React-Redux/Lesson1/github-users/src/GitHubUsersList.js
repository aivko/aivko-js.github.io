import React from 'react';

const IsAdmin = () => (
    <h3 className="badge badge-pill badge-dark p-3">Admin</h3>
);

const GitHubUsersList = ({thumbnail, login, link, is_admin}) => (
    <div className="users-list d-flex p-2">
      <div className="p-2">
        {thumbnail && <img className="rounded users-list__image" src={thumbnail} alt={login}/>}
      </div>
      <div className="d-flex flex-column justify-content-around">
        <div className="d-flex align-items-center">
          {login && <h3 className="mr-2">{login}</h3>}
          {is_admin ? <IsAdmin/> : null}
        </div>
        <div>
          {link && <a href={link} target="_blank">{link}</a>}
        </div>
      </div>
    </div>
);

export default GitHubUsersList;