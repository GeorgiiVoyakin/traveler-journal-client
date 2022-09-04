export const getAllByUser =  async (userId) => {
    const response = await fetch(`https://traveler-journal-server.herokuapp.com/note/get-by-user?${userId}`);
    
}