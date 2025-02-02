import { Finger, FingerCurl, FingerDirection } from "fingerpose";
import { GestureDescription } from "fingerpose";

//describe point_up for jump
const jumpTata = new GestureDescription('point_up');

//Index figure open and pointing up

 
//all other fingers should be closed
for (let finger of [Finger.Thumb, Finger.Index,Finger.Middle, Finger.Ring, Finger.Pinky]) {
  jumpTata.addCurl(finger, FingerCurl.NoCurl, 1.0);
  jumpTata.addDirection(finger, FingerDirection.VerticalUp, 1.0);
  jumpTata.addDirection(finger, FingerDirection.DiagonalUpLeft, 0.9);
  jumpTata.addDirection(finger, FingerDirection.DiagonalUpRight, 0.9);
}

export default jumpTata;