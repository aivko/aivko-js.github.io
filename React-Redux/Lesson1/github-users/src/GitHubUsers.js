import React from 'react';
import GitHubUsersList from './GitHubUsersList';

import usersJson from './users.json';

const GitHubUsers = () => usersJson.map(
    user => (
        <GitHubUsersList
            key={user.id}
            thumbnail={user.avatar_url}
            login={user.login}
            link={user.html_url}
            is_admin={user.site_admin}
        />
    ),
);

export default GitHubUsers;