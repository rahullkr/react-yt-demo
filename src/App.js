import { useState } from "react";
import "./App.css";
import Counter from "./components/counter";
import PlayButton from "./components/playbutton";
import Video from "./components/video";
import data from "./data/data";
function App() {
  const newhandleclick = (message) => {
    console.log(message);
  };

  const [videos, setVideos] = useState(data);

  return (
    <>
      <div className="App" onClick={() => console.log("app played")}>
        <div>
          <button
            onClick={() => {
              setVideos([
                ...videos,
                {
                  id: videos.length + 1,
                  title: "express tut",
                  channel: "my channel",
                  views: "102k",
                  time: "a year ago",
                  verified: true,
                },
              ]);
            }}
          >
            Add video
          </button>
        </div>
        {videos.map((video) => (
          <Video
            title={video.title}
            id={video.id}
            channel={video.channel}
            views={video.channel}
            time={video.time}
            verified={video.verified}
          >
            <PlayButton
              onPlay={() => newhandleclick("play button clicked")}
              onPause={() => newhandleclick("pause button clicked")}
            >
              {video.title}
            </PlayButton>
          </Video>
        ))}

        <Counter></Counter>
      </div>
    </>
  );
}

export default App;
