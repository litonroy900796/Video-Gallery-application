import { useState } from "react";
import { useEditVideoMutation } from "../../features/apiSlice";
import TextArea from "../ui/TextArea";
import TextInput from "../ui/TextInput";

export default function Form({video}) {
    const [title , setTitle] =useState(video.title);
    const [author , setAuthor] = useState(video.author);
    const [description , setDescription] = useState(video.description);
    const [link , setLink] = useState(video.link);
    const [thumbnail,setThumbnail] = useState(video.thumbnail);
    const [date , setDate] = useState(video.date);
    const [duration , setDuration] = useState(video.duration);
    const [views,setViews] = useState(video.views);

    const [editVideo , {isLoading , isSuccess,error}] = useEditVideoMutation()


    const handleSubmit = (e)=>{
        e.preventDefault();
        editVideo({
          id:video.id,
          data:{
            title,
          author,
          description,
          link,
          thumbnail,
          date,
          duration,
          views
          }
        })
       
      }
    return (
        <form onSubmit={handleSubmit} method="PATCH">
            <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <TextInput required value={title} onChange={(e)=> setTitle(e.target.value)} title="Video Title" />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <TextInput required value={author} onChange={(e)=> setAuthor(e.target.value)}  title="Author" />
                        </div>

                        <div className="col-span-6">
                            <TextArea required value={description} onChange={(e)=> setDescription(e.target.value)} title="Description" />
                        </div>

                        <div className="col-span-6">
                            <TextInput required value={link} onChange={(e)=> setLink(e.target.value)} title="YouTube Video link" />
                        </div>

                        <div className="col-span-6">
                            <TextInput required value={thumbnail} onChange={(e)=> setThumbnail(e.target.value)} title="Thumbnail link" />
                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <TextInput required value={date} onChange={(e)=> setDate(e.target.value)} title="Upload Date" />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <TextInput required value={duration} onChange={(e)=> setDuration(e.target.value)} title="Video Duration" />
                        </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <TextInput required value={views} onChange={(e)=> setViews(e.target.value)} title="Video no of views" />
                    </div>
                    </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
                    >
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
}
