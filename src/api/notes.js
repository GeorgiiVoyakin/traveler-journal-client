import { apiHost } from './config';

export const getAllNotesForCurrentUser = async (userId) => {
  return await fetch(`${apiHost}/note/get-all-current-user`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
};

export const postNote = async (note) => {
  return await fetch(`${apiHost}/note/create`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
  });
};

export const deleteNote = async (id) => {
  return await fetch(`${apiHost}/note/delete`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  });
};
