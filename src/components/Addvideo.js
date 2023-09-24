import { useState } from "react";
import "./Addvideo.css";
function AddVideo({ addVideos }) {
  const initialState = {
    time: "2 year ago",
    channel: "my channel",
    verified: true,
    title: "",
    views: "",
  };

  const [video, setVideo] = useState(initialState);
  function handleGet(e) {
    addVideos(video);
    e.preventDefault();
    setVideo(initialState);
  }
  function handleChange(e) {
    // console.log(e.target.name, e.target.value);

    setVideo({ ...video, [e.target.name]: e.target.value });
  }

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
        <button onClick={handleGet}>Add Video</button>
      </form>
    </>
  );
}

export default AddVideo;
