const API_ROOT = 'http://localhost:4000';

export default function createAgent([state, actions]) {
  async function send(method, url, data, resKey) {
    const headers = {},
      opts = { method, headers };

    if (data !== undefined) {
      headers['Content-Type'] = 'application/json';
      opts.body = JSON.stringify(data);
    }

    if (state.token) headers['Authorization'] = `Token ${state.token}`;

    try {
      const response = await fetch(API_ROOT + url, opts);
      const json = await response.json();
      return resKey ? json[resKey] : json;
    } catch (err) {
      if (err && err.response && err.response.status === 401) {
        actions.logout();
      }
      return err;
    }
  }

  const Auth = {
    current: () => send('get', '/user', undefined, 'user'),
    login: (email, password) =>
      send('post', '/auth/login', { email, password }),
    register: (email, password) =>
      send('post', '/auth/register', { email, password }),
    save: (user) => send('put', '/user', { user }),
  };

  const Tags = {
    getAll: () => send('get', '/tags', undefined, 'tags'),
  };

  const Profile = {
    get: (username) =>
      send('get', `/profiles/${username}`, undefined, 'profile'),
    update: (user) => send('put', `/profiles/${user.username}`, user),
  };

  return {
    Auth,
    Profile,
    Tags,
  };
}
