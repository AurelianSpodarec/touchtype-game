import { useEffect, useState } from "react";

function useKeyboard() {
  const [pressedKeys, setPressedKeys] = useState([]);

  const getRandomSound = () => {
    const soundFiles = [
      "/assets/sound/key-press-1.mp3",
      "/assets/sound/key-press-2.mp3",
    ];

    const randomIndex = Math.floor(Math.random() * soundFiles.length);
    return soundFiles[randomIndex];
  };

  const handleKeyPress = (event) => {
    const { key } = event;

    if (!pressedKeys.includes(key)) {
      if (event.code === "Space") {
        const audioInstance = new Audio("/assets/sound/key-press-spacebar.mp3");
        audioInstance.volume = 0.5;
        audioInstance.play();
      } else {
        const soundFile = getRandomSound();
        const audioInstance = new Audio(soundFile);
        audioInstance.play();
      }

      setPressedKeys((prevKeys) => [...prevKeys, key]);
    }
  };

  const handleKeyRelease = (event) => {
    const { key } = event;
    setPressedKeys((prevKeys) => prevKeys.filter((pressedKey) => pressedKey !== key));
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("keyup", handleKeyRelease);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("keyup", handleKeyRelease);
    };
  }, [pressedKeys]);

  return pressedKeys;
}

export default useKeyboard;
