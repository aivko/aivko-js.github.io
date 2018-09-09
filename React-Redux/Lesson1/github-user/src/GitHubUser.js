import React from 'react';
import GitHubUserData from './GitHubUserData';

import userJson from './user.json';

const GitHubUser = () => (
    <GitHubUserData
        userJson={userJson}
    />
);

export default GitHubUser;