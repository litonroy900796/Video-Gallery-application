import { useParams } from "react-router-dom";
import { useGetVideoQuery } from "../../features/apiSlice";
import Error from "../ui/Error";
import DescriptionLoader from "../ui/loaders/DescriptionLoader";
import PlayerLoader from "../ui/loaders/PlayerLoader";
import RelatedVideoLoader from "../ui/loaders/RelatedVideoLoader";
import Description from "../video/Description";
import Player from "../video/Player";
import RelatedVideos from "../video/related/RelatedVideos";

export default function Video() {
      const  paramId = useParams()
      const {data:video , isLoading,isError} = useGetVideoQuery(paramId.videoId)
      
      if(isError) return <><Error massage={"There was a Error"} /></>
    return (
        <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
            <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                <div className="grid grid-cols-3 gap-2 lg:gap-8">
                    <div className="col-span-full w-full space-y-8 lg:col-span-2">
                        {
                            isLoading  ? <PlayerLoader  /> : <Player link={video?.link} title={video?.title} />
                        }
                        {
                            isLoading ? <DescriptionLoader /> : <Description video={video} />
                        }
                        
                    </div>

                 {isLoading && video?.id ? <RelatedVideoLoader /> : <RelatedVideos /> }   
                </div>
            </div>
        </section>
    );
}
