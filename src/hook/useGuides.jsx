import { useQuery } from "@tanstack/react-query";


const useGuides = () => {
    const {data, isLoading ,isFetching, refetch } = useQuery(
        {
            queryKey:["guide"],
            queryFn: async ()=>{
                const data = await fetch("https://tour-to-heart-server.vercel.app/guides");
                return await data.json();
            }
        }
    )
    return { data,isLoading,isFetching,refetch };
};

export default useGuides;