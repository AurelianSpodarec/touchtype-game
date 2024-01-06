'use client'

import KeyboardMac from '@/components/Keyboard/Mac';
import Image from 'next/image'
import React, { useEffect, useState } from 'react';

// Alpabeth testssss

const level = {
  text: "As I unleash my keyboard prowess, my fingers are practically setting off smoke alarms with their blazing speed. It's like my hands are on a mission to prove that caffeine isn't the only stimulant in the room. If my typing skills were a superpower, they'd be the envy of every comic book hero – move over, Spider-Man, there's a new quick-fingered vigilante in town, and my arch-nemesis is the backspace key."
}

const textWord = {
  index: 0,
  status: "correct",
  letter: "t",
}

// TODO
// Get User key events
// Render words
// Check for WPM
// Track Accuracy

interface Character {
  character: string;
  status: "correct" | "wrong" | "corrected"
}

function RenderCharacterList({ textList, state }: { textList: Character[] }) {
  return textList.map((text, index: number) => (
    <Character key={index} character={text} state={state[index]} />
  ));
}


interface CharacterState {
  corrected: boolean;
  status: "correct" | "wrong" | "corrected" | "default";
}


const Character = React.memo(({ character, state }: { character: Character, state: CharacterState }) => {
  console.log(state)
  const statusClass = {
    correct: "green",
    wrong: "red",
    corrected: "orange"
  };

  return (
    <span className="min-w-2 outline-1 outline-white text-2xl" style={{ background: statusClass[state?.status] }}>
      {character}
    </span>
  );
},
  (prevProps, nextProps) => prevProps.character === nextProps.character && prevProps.state === nextProps.state
);



function useHookKeyboard() {
  const [pressedKeys, setPressedKeys] = useState([]);

  const handleKeyPress = (event) => {
    const { key } = event;

    if (!pressedKeys.includes(key)) {
      setPressedKeys((prevKeys) => [...prevKeys, key]);
    }
  };

  const handleKeyRelease = (event) => {
    const { key } = event;
    setPressedKeys((prevKeys) => prevKeys.filter((pressedKey) => pressedKey !== key));
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('keyup', handleKeyRelease);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('keyup', handleKeyRelease);
    };
  }, [pressedKeys]);

  return pressedKeys;
}



export default function Challenge() {
  const compiledTextChallenge = level.text.split('');
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
  const [charactersState, setCharactersState] = useState([{}])
  const currentCharacter = compiledTextChallenge[currentCharacterIndex];
  // const [pressed]
  // Pressed keys = [] , check if they are pressed, if not take them out
  // on press up, take the keys out
  // const [pressedKeys, setPressedkeys] = useState([])
  const pressedKeys = useHookKeyboard();
  // Functions
  // ===================================================================

  // Show different keyboard layout based on the OS
  // console.log(navigator.userAgent.includes('Mac'))
  function handleKeyUp(e) {
    const updatedKeys = pressedKeys.filter((key) => key !== e.key);
    // setPressedkeys(updatedKeys);
  }

  const ignoredKeys = ['Shift', 'Control', 'Alt', 'CapsLock', 'Tab', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
  function characterPress(e) {
    if (ignoredKeys.includes(e.key)) {
      return;
    }

    // setPressedkeys([...pressedKeys, e.key])

    const currentKeyMatch = currentCharacter === e.key;

    setCharactersState((prevCharactersState) => {
      const updatedState = [...prevCharactersState];
      updatedState[currentCharacterIndex] = {
        corrected: false,
        status: currentKeyMatch ? "correct" : "wrong",
      };
      return updatedState;
    });

    setCurrentCharacterIndex(currentCharacterIndex + 1);
  }

  function backspacePress() {
    setCurrentCharacterIndex(currentCharacterIndex - 1);
    setCharactersState((prevCharactersState) => {
      const updatedState = [...prevCharactersState];
      updatedState[currentCharacterIndex] = {
        corrected: true,
        status: ""
      };
      return updatedState;
    });
  }

  function checkIfGameEnds() {
    const lastCharacter = compiledTextChallenge.length - 1 === currentCharacterIndex
    if (lastCharacter) {
      // stop timer
      // show modal
      console.log("game ended")
    } else {
      console.log("game in progress")
    }
  }

  function handleKeyPress(e: any) {
    if (e.key === 'Backspace') {
      backspacePress()
    } else {
      characterPress(e)
    }
  }

  // Other
  // ===================================================================

  useEffect(() => {
    // console.log("charactersState", charactersState)
    checkIfGameEnds()
  }, [currentCharacterIndex]);

  console.log(pressedKeys)

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    window.removeEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [currentCharacterIndex, compiledTextChallenge]);

  return (
    <main className="overflow-hidden">
      <div className="mx-auto max-w-4xl">
        {/* <img src="https://tailwindui.com/img/beams-home@95.jpg" alt="" className="absolute -top-[1rem] left-1/2 -ml-[40rem] w-[163.125rem] max-w-none sm:-ml-[67.5rem]" /> */}
        <div className="my-20 text-gray-200">
          <RenderCharacterList textList={compiledTextChallenge} state={charactersState} />
        </div>
        <KeyboardMac pressedKeys={pressedKeys} />
      </div>
    </main>
  )
}
