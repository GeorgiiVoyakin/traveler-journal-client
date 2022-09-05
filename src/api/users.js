export const signup = async (user) => {
  return await fetch(
    'https://traveler-journal-server.herokuapp.com/auth/signup',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(user),
    }
  );
};

export const login = async (user) => {
  return await fetch(
    'https://traveler-journal-server.herokuapp.com/auth/login',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(user),
    }
  );
};
