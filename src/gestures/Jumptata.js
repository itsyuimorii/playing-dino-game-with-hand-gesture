import { Finger, FingerCurl, FingerDirection } from "fingerpose";
import { GestureDescription } from "fingerpose";

//describe point_up for jump
const jumpTata = new GestureDescription('point_up');

//Index figure open and pointing up
jumpTata.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
jumpTata.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
jumpTata.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.9);
jumpTata.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.9);

//all other fingers should be closed
for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  jumpTata.addCurl(finger, FingerCurl.Curl, 1.0);
}

export default jumpTata;