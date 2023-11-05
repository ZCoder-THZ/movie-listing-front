import axios from "axios"
const api=import.meta.env.VITE_API_URL;
export const register=async (data)=>{

    const register=await axios.post(`${api}/register`,data);

    const response=await register.data;

    return response;

}

export const login=async (data)=>{

    try {
        const login=await axios.post(`${api}/login`,data);
        const response=await login.data;
    
        return response
      
    } catch (error) {
        throw error
    }

   

}