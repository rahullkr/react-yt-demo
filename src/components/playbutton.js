import { useState } from "react";
import "./playbutton.css";

function PlayButton({ onPlay, onPause, children }) {
//   console.log(onPlay, onPause);
const [playing, setPlaying] = useState(false)
  function handleclick(e) {
    // console.log(e); // here e is an event obj
    e.stopPropagation();
    if(playing) onPause();
    else onPlay();
         setPlaying(!playing )
  }

  return <button onClick={handleclick}>{children}: {playing ? '>': '||'}</button>;
}

export default PlayButton;
