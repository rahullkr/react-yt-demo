import { useState } from "react";
import "./App.css";
import data from "./data/data";
import AddVideo from "./components/Addvideo";
import VideoList from "./components/Videolist";
function App() {


  const [videos, setVideos] = useState(data);
  function addVideos(video) {
    setVideos([...videos, {...video, id: videos.length + 1}]);
  }
  return (
    <>
      <div className="App" onClick={() => console.log("app played")}>
        <AddVideo addVideos={addVideos}></AddVideo>
        <VideoList videos={videos}></VideoList>
      </div>
    </>
  );
}

export default App;
