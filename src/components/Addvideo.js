import { useEffect, useState } from "react";
import "./Addvideo.css";
function  AddVideo({ addVideos, editableVideo, updateVideo }) {
  const initialState = {
    time: "2 year ago",
    channel: "my channel",
    verified: true,
    title: "",
    views: "",
  };

  const [video, setVideo] = useState(initialState);
  function handleGet(e) {
    e.preventDefault();
    if(editableVideo){
        updateVideo(video )
    }
    else{
      addVideos(video); 
    }
  
  
    setVideo(initialState);
  }
  function handleChange(e) {
    // console.log(e.target.name, e.target.value);

    setVideo({ ...video, [e.target.name]: e.target.value });
  }

  useEffect(()=>{
      // since we're providing the initial val of editablevideo as null, so it'll give error on first time
      if(editableVideo)
      {
        setVideo(editableVideo)
      }
  }, [editableVideo])

  return (
    <>
      <form>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="title"
          value={video.title}
        />
        <input
          type="text"
          name="views"
          onChange={handleChange}
          placeholder="views"
          value={video.views}
        />
        <button onClick={handleGet}> {editableVideo ? 'Edit' : 'Add'} Video</button>
      </form>
    </>
  );
}

export default AddVideo;
