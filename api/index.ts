import ky from "ky";
import { serverUrl } from "../constants/serverConstants";

const api = ky.create({
    prefixUrl: serverUrl,
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        Cookie: document.cookie
    }
})

export default api