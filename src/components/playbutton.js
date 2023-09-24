import "./playbutton.css";

function PlayButton({ onPlay, onPause, children }) {
//   console.log(onPlay, onPause);
let playing =false; 
  function handleclick(e) {
    // console.log(e); // here e is an event obj
    e.stopPropagation();
    if(playing) onPause();
    else onPlay();
    playing = !playing; 
  }

  return <button onClick={handleclick}>{children}: {playing ? '>': '||'}</button>;
}

export default PlayButton;
