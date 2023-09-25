import "./video.css";

function Video({ title, channel, views, time, verified, id, children, deleteVideo, editVideo}) {

  return (
    <>
      <div className="container">
      <button className="close"  onClick={()=>deleteVideo(id)}> X </button>
      <button className="edit"  onClick={()=>editVideo(id)}> Edit </button>
        <div className="pic">
          <img src={`https://picsum.photos/id/${id}/200/300`}></img>
        </div>
        <div className="title">{title}</div>
        <div className="channel">
          {channel} {verified ? "✅" : null}{" "}
        </div>
        <div className="views">
          {views} views <span>.</span>
          {time}
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}

export default Video;
