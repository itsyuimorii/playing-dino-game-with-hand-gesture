const fingerJoints = {
  thumb: [0, 1, 2, 3, 4],
  indexFinger: [0, 5, 6, 7, 8],
  middleFinger: [0, 9, 10, 11, 12],
  ringFinger: [0, 13, 14, 15, 16],
  pinky: [0, 17, 18, 19, 20],
};

//Drawing function
export const drawHand = (predictions, ctx) => {

  if (!predictions || predictions.length === 0) return;
    predictions.forEach((prediction) => {
      
      const keypoints = prediction.keypoints;
      if (!keypoints || keypoints.length === 0) return;

      // //loop through fingers
      // for (let j = 0; j < Object.keys(fingerJoints).length; j++) {
      //   let finger = Object.keys(fingerJoints)[j];
      //   for (let k = 0; k < fingerJoints[finger].length - 1; k++) {
      //     //Get pairs of joints]
      //     const firstJointIndex = fingerJoints[finger][k];
      //     const secondJointIndex = fingerJoints[finger][k + 1];

      //     //Draw Path
      //     ctx.beginPath();
      //     ctx.moveTo(
      //       keypoints[firstJointIndex][0],
      //       keypoints[firstJointIndex][1]
      //     );
      //     ctx.lineTo(
      //       keypoints[secondJointIndex][0],
      //       keypoints[secondJointIndex][1]
      //     );
      //     ctx.strokeStyle = "plum";
      //     ctx.lineWidth = 4;
      //     ctx.stroke();
      //   }
      // }
      // //loop through landmarks and draw them
      // console.log(keypoints, keypoints[0].x);
   
      for (let i = 0; i < keypoints.length; i++) {
        const x = keypoints[i].x;
        const y = keypoints[i].y;
        
        //start drawing
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, 2 * Math.PI);

        //set line color
        ctx.fillStyle = "aqua";
        ctx.fill();
      }
    });
};
