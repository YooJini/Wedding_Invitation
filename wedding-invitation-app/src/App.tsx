import { useEffect } from "react";
import "./game/main";

function App() {
  useEffect(() => {
    // Phaser Game은 /src/game/main.ts에서 실행됨
    // 'phaser-game' div에 자동 mount됨
  }, []);

  return (
    <div>
      <div id="phaser-game" />
    </div>
  );
}

export default App;
