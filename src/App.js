import { useReducer, useState } from "react";
import "./App.css";
import data from "./data/data";
import AddVideo from "./components/Addvideo";
import VideoList from "./components/Videolist";
function App() {

  const [editableVideo, seteditableVideo] = useState(null);

  function videoReducer(videos, action){
    switch(action.type){
      case 'ADD':
        return [...videos, { ...action.payload, id: videos.length + 1 }]
      case 'DELETE': 
        return videos.filter((video) => video.id !== action.payload);
      case 'UPDATE': 
         const index = videos.findIndex((v) => v.id === action.payload.id);
         const newVideo = [...videos];
         newVideo.splice(index, 1, action.payload );
         seteditableVideo(null);
         return newVideo;
      
        default : 
        return videos; 
    }

  }
 // to make a usereducer state we describe it like this
 const [videos, dispatch] = useReducer(videoReducer, data)
 // here reducer is a fn and data is the data passed and dispatch is a fn which will provide flexibility 

  // const [videos, setVideos] = useState(data);

  function addVideos(video) {
      dispatch({type: 'ADD', payload: video})
    // setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }

  function deleteVideo(id) {
    // console.log(id);
    dispatch({type: 'DELETE', payload: id})
    // setVideos(videos.filter((video) => video.id !== id));
  }

  function editVideo(id) {
    seteditableVideo(videos.find((video) => video.id === id));
  }
  function updateVideo(video) {
    dispatch({type: 'UPDATE', payload: video})
    // const index = videos.findIndex((v) => v.id === video.id);
    // const newVideo = [...videos];
    // newVideo.splice(index, 1, video);
    // setVideos(newVideo);
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
