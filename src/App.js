import * as handPoseDetection from "@tensorflow-models/hand-pose-detection";
import * as tf from "@tensorflow/tfjs-core";
import "@tensorflow/tfjs-backend-webgl";

import Webcam from "react-webcam";
import * as fp from "fingerpose";
import { useRef } from "react";
import { drawHand } from "./components/utils";
import jumpTata from "./gestures/Jumptata";

const App = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const runHandpose = async () => {
    const loadedHandModel = await handPoseDetection.SupportedModels
      .MediaPipeHands;

    const detectorConfig = {
      runtime: "tfjs",
    };
    const detector = await handPoseDetection.createDetector(
      loadedHandModel,
      detectorConfig
    );
    // Use requestAnimationFrame for continuous detection
    // const detect = async () => {
    //   await detectModel(detector);
    //   requestAnimationFrame(detect); // Continue detecting in a loop
    // };
    // detect(); // Start detection loop
    setInterval(async () => {
      await detectModel(detector);
    }, 100);
  };
  runHandpose();

  const detectModel = async (detector) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      //Get video properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      //Set video height and width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      //Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      //Make Detections
      const hands = await detector.estimateHands(video);
      // console.log("🚀 ~ detectModel ~ hands:", hands);

      if (hands.length > 0) {
        const GE = new fp.GestureEstimator([jumpTata]);
        const gesturePrediction = await GE.estimate(hands[0].keypoints, 4);
        console.log("🚀 ~ useDetect ~ gesturePrediction:", gesturePrediction);
        gesturePrediction.gestures.forEach((prediction) => {
          if (prediction.name === "point_up" && prediction.score > 4.9
  
          ) {
            sendSpaceKey();
          }
        });
        const ctx = canvasRef.current.getContext("2d"); 
        drawHand(hands, ctx);
      }
    }
  };

  const sendSpaceKey = () => {
    console.log("sending keys...");
    if (window.electron) {
      window.electron.sendSpaceKey();
    } else {
      console.warn("Electron API not available");
    }
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
          // border: "2px solid red",
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 99,
          width: 640,
          height: 480,
        }}
      />
    </div>
  );
};

export default App;
