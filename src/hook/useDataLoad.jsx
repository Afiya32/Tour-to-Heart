import { useQuery } from "@tanstack/react-query";


const useDataLoad = () => {
    const {data, isLoading ,isFetching, refetch } = useQuery(
        {
            queryKey:["tour"],
            queryFn: async ()=>{
                const data = await fetch("http://localhost:5000/tour");
                return await data.json();
            }
        }
    );
       return { data,isLoading,isFetching,refetch };


};

export default useDataLoad;