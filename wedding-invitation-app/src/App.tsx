import { useEffect } from "react";
// import "./game/main";
import Intro from "./pages/Intro";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Invitation from "./pages/Invitation";
import Map from "./pages/Map";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/invitation" element={<Invitation />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );

  useEffect(() => {
    // Phaser Game은 /src/game/main.ts에서 실행됨
    // 'phaser-game' div에 자동 mount됨
  }, []);

  return <Intro />;
  // return <div>{/* <div id="phaser-game" /> */}</div>;
}

export default App;
