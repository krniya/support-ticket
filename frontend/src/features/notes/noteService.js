import axios from "axios";

const API_URL = "/api/tickets/";

// Get Users Tickets Notes
const getNotes = async (ticketId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.get(API_URL + ticketId + "/notes", config);
    return response.data;
};

// Create new Ticket notes
// const createNotes = async (noteData, token) => {
//     const config = {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     };

//     const response = await axios.post(API_URL, ticketData, config);
//     return response.data;
// };

const noteService = {
    getNotes,
};

export default noteService;
