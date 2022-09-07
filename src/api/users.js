import { apiHost } from './config';

export const signup = async (user) => {
  return await fetch(`${apiHost}/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(user),
  });
};

export const login = async (user) => {
  return await fetch(`${apiHost}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(user),
  });
};

export const getUsername = async () => {
  return await fetch(`${apiHost}/user/username`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
};
