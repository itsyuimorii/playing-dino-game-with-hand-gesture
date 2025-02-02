import { Finger, FingerCurl, FingerDirection } from "fingerpose";
import { GestureDescription } from "fingerpose";

// Define "jump" gesture where all fingers are up
const jumpTata = new GestureDescription("point_up");

// All fingers: Fully extended and pointing up
for (let finger of [Finger.Thumb, Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  jumpTata.addCurl(finger, FingerCurl.NoCurl, 1.0);
  jumpTata.addDirection(finger, FingerDirection.VerticalUp, 1.0);
  jumpTata.addDirection(finger, FingerDirection.DiagonalUpLeft, 0.9);
  jumpTata.addDirection(finger, FingerDirection.DiagonalUpRight, 0.9);
}

export default jumpTata;
