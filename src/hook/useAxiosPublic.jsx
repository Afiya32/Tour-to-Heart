import axios from 'axios'
export const axiosPublic = axios.create({
    baseURL : 'https://tour-to-heart-server.vercel.app'
}
)

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;