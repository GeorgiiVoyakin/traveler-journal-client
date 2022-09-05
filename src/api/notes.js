export const getAllNotesForCurrentUser = async (userId) => {
  return await fetch(
    'https://traveler-journal-server.herokuapp.com/note/get-all-current-user',
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }
  );
};

export const postNote = async (note) => {
  return await fetch(
    'https://traveler-journal-server.herokuapp.com/note/create',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(note),
    }
  );
};
