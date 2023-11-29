import { useQuery } from "@tanstack/react-query";



const useDataLoad = () => {
    const {data, isLoading ,isFetching, refetch } = useQuery(
        {
            queryKey:["tour"],
            queryFn: async ()=>{
                const data = await fetch("https://tour-to-heart-server.vercel.app/tour");
                return await data.json();
            }
        }
    );
       return { data,isLoading,isFetching,refetch };


};

export default useDataLoad;