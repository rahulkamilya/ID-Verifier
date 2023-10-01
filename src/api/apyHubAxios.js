import axios from 'axios';
const APYHUB_BASE_URL = 'https://api.apyhub.com';

// Custom Instance of Axios For APYHUB
export default axios.create({
    baseURL: APYHUB_BASE_URL,
    headers: {
        "apy-token":
            "APY0ZKwhdYXKCAZabBup4HDG1hqHrYohrGRdG5AEiB4CrBI4h5NknHXg333lbXATa6hWIV",
        "Content-Type": "application/json",
    },
});