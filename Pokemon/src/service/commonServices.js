import axios from 'axios';

export default async function getService(api) {
    let config = {
        headers: {
            'Accept': 'application/json'
        }
    }
    let result = null;
    result = await axios.get(api, config);
    return result.data;
};



