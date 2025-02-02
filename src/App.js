import React from "react";

const App = () => {
  const sendSpaceKey = () => {
    console.log("sending keys...")
    setTimeout(
      () => {
        if (window.electron) {
          window.electron.sendSpaceKey();
        } else {
          console.warn("Electron API not available");
        }

      }, 2000
    )
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Electron + React Key Press</h1>
      <button onClick={sendSpaceKey} style={{ fontSize: "20px", padding: "10px 20px" }}>
        Press Space Key
      </button>
    </div>
  );
};

export default App;
