import { useEffect } from "react";
// import "./game/main";
import Intro from "./pages/Intro";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Map from "./pages/Map";

function App() {
  useEffect(() => {
    const audio = new Audio("/audios/Gimbap.mp3");
    audio.loop = true;
    audio.preload = "auto";
    audio.play();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
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
