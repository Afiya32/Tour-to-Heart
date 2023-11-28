import { useQuery } from "@tanstack/react-query";


const useGuides = () => {
    const {data, isLoading ,isFetching, refetch } = useQuery(
        {
            queryKey:["guide"],
            queryFn: async ()=>{
                const data = await fetch("http://localhost:5000/guides");
                return await data.json();
            }
        }
    )
    return { data,isLoading,isFetching,refetch };
};

export default useGuides;