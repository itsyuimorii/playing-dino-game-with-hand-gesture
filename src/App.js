import React, { useRef } from "react";
import * as tf from "@tensorflow/tfjs";
import * as handPose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import * as fp from "fingerpose";
import { drawHand } from "./components/utils";
import jumpTata from './gestures/Jumptata';

const App = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const runHandPose = async () => {
    const loadedHandModel = await handPose.load();
    // console.log("HandPose model loaded");
    
    setInterval(()=>{
        detectModel(loadedHandModel)
      },100)
    //Loop and detect hands
    };

  const detectModel = async (loadedHandModel) => {
    //1. Check if the data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      //Get video properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight =  webcamRef.current.video.videoHeight;

      //Set video height and width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      //Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      //Make Detections
      const hand = await loadedHandModel.estimateHands(video);
      // console.log("🚀 ~ useDetect ~ hand:", hand)

      if(hand.length > 0) {
        const GE = new fp.GestureEstimator([
          jumpTata
        ])
        const gesture = await GE.estimate(hand[0].landmarks, 4);
        console.log("🚀 ~ detectModel ~ gesture:", gesture)
        
      }
      //Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand,ctx);
    }
  };

  runHandPose();



  const sendSpaceKey = () => {
    console.log("sending keys...");
    setTimeout(() => {
      if (window.electron) {
        window.electron.sendSpaceKey();
      } else {
        console.warn("Electron API not available");
      }
    }, 2000);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Electron + React Key Press</h1>
      <button
        onClick={sendSpaceKey}
        style={{ fontSize: "20px", padding: "10px 20px" }}
      >
        Press Space Key
      </button>
      <Webcam
        ref={webcamRef}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 9,
          width: 640,
          height: 480,
        }}
      />
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 9,
          width: 640,
          height: 480,
        }}
      />
    </div>
  );
};

export default App;
