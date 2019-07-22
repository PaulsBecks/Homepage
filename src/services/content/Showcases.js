import axios from 'axios';

async function getAll() {
    const response = await axios.get('/showcases');
    return response.data ? response.data : [];
}

export default {
    getAll
}