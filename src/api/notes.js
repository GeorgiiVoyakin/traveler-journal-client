export const getAllNotesForCurrentUser =  async (userId) => {
    const response = await fetch('https://traveler-journal-server.herokuapp.com/note/get-all-current-user', {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
    });
    return response;
}