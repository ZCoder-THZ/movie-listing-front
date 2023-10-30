import axios from "axios"
const api=import.meta.env.VITE_API_URL;
export const register=async (data)=>{

    const register=await axios.post(`${api}/register`,data);

    const response=await register.data;

    return response;

}