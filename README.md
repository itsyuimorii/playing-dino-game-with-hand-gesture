# Hand Gesture Controlled Dino Game using React, TensorFlow.js & Electron

## Overview
This project is a **hand gesture recognition system** that enables users to play the **Chrome Dino Game** using a specific hand gesture. It leverages **computer vision** and **machine learning** to detect hand landmarks and recognize predefined gestures in real time. The application is built using **React, TensorFlow.js, and Electron**, making it suitable for both **web** and **desktop environments**.

## Tech Stack
- **React**  
- **TensorFlow.js**  
- **HandPose Model**  
- **Fingerpose**  
- **Electron**  
- **Webcam API**  

## Features
✅ **Real-time hand tracking** using TensorFlow.js HandPose Model  
✅ **Gesture recognition** with Fingerpose  
✅ **Electron integration** for desktop interactions  
✅ **Play Chrome Dino Game** by performing a specific hand gesture  
✅ **Canvas rendering** of hand skeleton for better visualization  
 
## Gesture: "Point Up" for Jump
- The **index finger** must be **fully extended and pointing up**.
- All **other fingers must be curled**.
- The **gesture estimator** confirms the match with a high confidence score before triggering the space key event.

## Use Cases
🎮 **Gaming** - Hands-free control to play the Chrome Dino Game  
💻 **Accessibility** - Assistive technology for users with limited mobility  
🖥️ **Fun Experiment** - Explore AI-powered gesture control  

## Installation & Setup
```bash
# Clone the repository
git clone https://github.com/yourusername/hand-gesture-dino-game.git
cd hand-gesture-dino-game

# Install dependencies
npm install

# Run the application
npm start
```

## Future Improvements
🚀 Add more gestures for different actions  
🚀 Implement gesture customization  
🚀 Improve detection accuracy with additional ML techniques  

 


 https://www.warp.dev/terminus/npm-install-from-github