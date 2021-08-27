import { useState } from "react";

export default function useToken() {

    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        const useToken = JSON.parse(tokenString);
        return useToken?.token
    }; 

    const [token, setToken] = useState(getToken());

    const saveToken = useToken => {
        localStorage.setItem('token', JSON.stringify(useToken));
        setToken(useToken.token);
    }

    return {
        setToken: saveToken,
        token
    }
}