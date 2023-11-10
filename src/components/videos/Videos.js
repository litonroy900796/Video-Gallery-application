import { useGetVideosQuery } from "../../features/apiSlice";
import VideoLoader from "../ui/loaders/VideoLoader";
import Error from "../ui/Error";
import Video from "./Video";

export default function Videos() {
    const {data:videos,isError,isLoading} = useGetVideosQuery()
     
    if(isLoading) return <><VideoLoader /><VideoLoader /><VideoLoader /><VideoLoader /><VideoLoader /><VideoLoader /><VideoLoader /></>
    if(isError) return  <Error massage={"There was a error"} />
    return (
        <>
        {
            !!videos?.length && videos?.map((video,i)=>{
                return  <Video key={i} video={video} />
            })
        }
           
           
        </>
    );
}
