export const signup = async (user) => {
    await fetch('https://traveler-journal-server.herokuapp.com/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(user)
      });
}