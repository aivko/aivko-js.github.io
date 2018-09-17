export const getUser = (token) => {
  return fetch(
      `https://api.github.com/user?access_token=${token}`,
    )
    .then(response => response.json());
};

export const patchUser = (token, data) => {
  return fetch(
      `https://api.github.com/user?access_token=${token}`,
      {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    .then(response => response.json());
};
