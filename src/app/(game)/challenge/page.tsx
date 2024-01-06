'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react';

// Alpabeth testssss

const level = {
  text: "this is a speed test type, wohooo!"
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
  // string to array of letters
  return textList.map((text, index: number) => {
    return (
      <Character character={text} state={state[index]} />
    )
  })
}

// function RenderWords() {
//   return (
//     <div>

//     </div>
//   )
// }

// function createCharacterGroup({ word }) {
//   // transform the word to single charactrs
//   // "String"
//   return (
//     <div className="group">

//     </div>
//   )
// }

interface characterObject {
  corrected: boolean;
  status: "correct" | "wrong" | "corrected" | "default";
}

const characterObject = {
  corrected: false,
  status: "correct"
}


function Character({ character, state }: Character) {
  console.log(state)
  // Is Correct
  // Is wrong
  // Was corrected with bakspace
  // charactersState
  const statusClass = {
    correct: "green",
    wrong: "red",
    corrected: "orange"
  }

  return (
    <span className="min-w-2 outline-1 outline-white text-2xl" style={{ background: statusClass[state?.status] }}>
      {character}
    </span>
  )
}

export default function Challenge() {
  const compiledTextChallenge = level.text.split('');
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
  const [charactersState, setCharactersState] = useState([{}])
  const currentCharacter = compiledTextChallenge[currentCharacterIndex];

  // Functions
  // ===================================================================

  function characterPress(e) {
    const currentKeyMatch = currentCharacter === e.key
    const updatedCharactersState: any = [...charactersState];

    if (currentKeyMatch) {
      updatedCharactersState[currentCharacterIndex] = {
        corrected: false,
        status: "correct",
      };
    } else {
      updatedCharactersState[currentCharacterIndex] = {
        corrected: false,
        status: "wrong",
      };
    }

    setCurrentCharacterIndex(currentCharacterIndex + 1);
    setCharactersState(updatedCharactersState);
  }

  function backspacePress() {
    setCurrentCharacterIndex(currentCharacterIndex - 1);
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
    console.log("charactersState", charactersState)
  }, [currentCharacterIndex]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentCharacterIndex, compiledTextChallenge]); // Include compiledTextChallenge in the dependency array

  // State 
  return (
    <main>
      <RenderCharacterList textList={compiledTextChallenge} state={charactersState} />
    </main>
  )
}
