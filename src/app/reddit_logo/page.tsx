import React from "react";
import ReactDOM from "react-dom";
import {Face} from "./Face";

// https://www.youtube.com/watch?v=2LhoCfjm8R4

const width = 960;
const height = 500;


const App = () => {
  return (
    <div className="bg-white h-screen w-full">
      <Face  centerX = {width / 2}
 centerY = {height / 2}

 eyeoffsetX = {90}
 eyeoffsetY = {90}
 eyeRadius = {50}
 tentacleX = {600} // Adjust as needed for the tentacle's x-position
 tentacleY = {100} // Adjust as needed for the tentacle's y-position
 mouthWidth = {10}
 mouthRadius = {100}
   width = {960}
   height = {500}/>
  
 }
    </div>
  );
};

export default App;
