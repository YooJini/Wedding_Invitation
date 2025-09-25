import { useEffect } from "react";
import { createGame } from "../game/main";
import Gallery from "../components/Gallery";
import { useGameUIStore } from "../stores/useGameUIStore";

const Map = () => {
  const { galleryOpen } = useGameUIStore();

  useEffect(() => {
    const game = createGame();

    return () => {
      game.destroy(true);
    };
  }, []);

  return (
    <>
      <div id="phaser-game" />
      {galleryOpen && (
        <Gallery
          onClose={() => useGameUIStore.setState({ galleryOpen: false })}
        />
      )}
    </>
  );
};

export default Map;
