import { useRelatedVideoQuery } from "../../../features/apiSlice";
import Error from "../../ui/Error";
import RelatedVideoLoader from "../../ui/loaders/RelatedVideoLoader";
import RelatedVideo from "./RelatedVideo";

export default function RelatedVideos({id,title}) {
    const {isLoading, data,error,isError} = useRelatedVideoQuery({id,title});
   
    if(isLoading) return <><RelatedVideoLoader /> <RelatedVideoLoader /> <RelatedVideoLoader /> <RelatedVideoLoader /></>

    if(isLoading && isError ) return  <Error massage={error?.massage} />
    
    return (
        <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
           {
            !!data?.length ? data?.map((relVideo,index)=>{
                return <RelatedVideo key={index} video={relVideo} />
            }) : <span className="text-[red] text-center mt-2">No Related Videos</span>
           } 
        </div>
    );
}
