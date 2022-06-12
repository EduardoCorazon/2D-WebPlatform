
import './style.css';
import { useState, useEffect } from "react";

function App() {
  useEffect(() => {
    document.addEventListener('keydown', detectKeyDown, true);
  }, [])

  //For detecting key presses
  const detectKeyDown = (e) => {
    console.log("clicked key", e.key)
    let player = document.querySelector('.player');
    let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"))
    let playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue("left"))

    if (e.key === " ") {
      console.log("Key Clicked: Spacebar")
    }

    //Key bindings for each movement of player object
    switch (e.key) {
      case 'ArrowRight': player.style.left = (playerLeft + 5) + "px";
        console.log(playerLeft)
        break;

      case 'ArrowLeft': player.style.left = (playerLeft - 5) + "px";
        console.log(playerLeft)
        break;

      case 'ArrowUp': player.style.top = (playerTop - 5) + "px";
        console.log(playerTop)
        break;

      case ' ': player.style.top = (playerTop - 5) + "px"
        break; //check code

      case 'ArrowDown': player.style.top = (playerTop + 5) + "px";
        console.log(playerTop)
        break;
    }
  }
  //Main Code part here, add JSX
  return (
    <div className="App">
      <div className='background'>
        <div className='platform'></div>
        <div className="player"></div>
      </div>
    </div>
  );
}
export default App;
