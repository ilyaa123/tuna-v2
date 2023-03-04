import ky from "ky";
import { serverUrl } from "../constants/serverConstants";

const api = ky.create({
    prefixUrl: serverUrl,
    retry: {
        limit: 1,
        methods: ['get'],
        statusCodes: [413],
        backoffLimit: 5000
    },
    hooks: {
        beforeRequest: [
            request => {
                request.headers.set('Autorization', 'Bearer ' + localStorage.getItem('token') || '')
            }
        ],
        beforeRetry: [
            async ({request, error}) => {
                if (error){
                    const token = await ky.get(serverUrl).text()
                    if (token) {
                        localStorage.setItem('token', token);
                        request.headers.set('Autorization', 'Bearer ' + localStorage.getItem('token') || '')
                    }
                }
            }
        ]
    }
})

export default api