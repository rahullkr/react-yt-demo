import "./App.css";
import Counter from "./components/counter";
import PlayButton from "./components/playbutton";
import Video from "./components/video";
import data from "./data/data";
function App() {
  const newhandleclick = (message) => {
    console.log(message);
  };

  return (
    <>
      <div className="App" onClick={() => console.log('app played')}>
        {data.map((video) => (
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
