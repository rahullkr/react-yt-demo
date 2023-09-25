import { useState } from "react";
import "./App.css";
import data from "./data/data";
import AddVideo from "./components/Addvideo";
import VideoList from "./components/Videolist";
function App() {
  const [videos, setVideos] = useState(data);
  const [editableVideo, seteditableVideo] = useState(null);
  function addVideos(video) {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }

  function deleteVideo(id) {
    // console.log(id);
    setVideos(videos.filter((video) => video.id !== id));
  }

  function editVideo(id) {
    seteditableVideo(videos.find((video) => video.id === id));
  }
  function updateVideo(video) {
    const index = videos.findIndex((v) => v.id === video.id);
    const newVideo = [...videos];
    newVideo.splice(index, 1, video);
    setVideos(newVideo);
    // console.log(newVideo);
  }
  return (
    <>
      <div className="App" onClick={() => console.log("app played")}>
        <AddVideo
          addVideos={addVideos}
          editableVideo={editableVideo}
          updateVideo={updateVideo}
        ></AddVideo>
        <VideoList
          editVideo={editVideo}
          deleteVideo={deleteVideo}
          videos={videos}
        ></VideoList>
      </div>
    </>
  );
}

export default App;
