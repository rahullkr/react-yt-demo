import Video from "./video";
import PlayButton from "./playbutton";
function VideoList({ videos }) {
  const newhandleclick = (message) => {
    console.log(message);
  };
  return (
    <>
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
    </>
  );
}

export default VideoList;
