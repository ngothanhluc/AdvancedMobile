import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
const API_URL = process.env.EXPO_PUBLIC_BASE_URL;
//check if token is expired
// const isTokenExpired = (token: string) => {
//     const decodedToken = jwt.decode(token);
//     if (!decodedToken) return true;
//     const expirationTime = decodedToken.exp * 1000;
//     const isExpired = Date.now() > expirationTime;
//     return isExpired;
// };
// if token is expired, refresh it
// const refreshToken = async () => {
//     const refresh_token = await AsyncStorage.getItem("refresh_token");
//     try {
//         const response = await axios.post(`${API_URL}/auth/refresh`, {
//             refresh_token,
//         });
//         const { access_token, refresh_token } = response.data;
//         await AsyncStorage.setItem("access_token", access_token);
//         await AsyncStorage.setItem("refresh_token", refresh_token);
//         return access_token;
//     } catch (error) {
//         console.log(error);
//     }
// };
// const apiClient = axios.create({
//     baseURL: API_URL,
//     headers: {
//         "Content-type": "application/json",
//     },
//     withCredentials: true,
// });
// apiClient.interceptors.request.use(async (config) => {
//     const access_token = await AsyncStorage.getItem("access_token");
//     if (access_token && isTokenExpired(access_token)) {
//         const new_access_token = await refreshToken();
//         config.headers["Authorization"] = `Bearer ${new_access_token}`;
//     } else {
//         config.headers["Authorization"] = `Bearer ${access_token}`;
//     }
//     return config;
// });

const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-type": "application/json",
    },
    withCredentials: true,
});
apiClient.interceptors.request.use(async (config) => {
    const access_token = await AsyncStorage.getItem("access_token");
    config.headers["Authorization"] = `Bearer ${access_token}`;
    return config;
});

export default apiClient;
