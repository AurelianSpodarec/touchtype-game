'use client'

import CharacterList from '@/components/Character/CharacterList';
import KeyboardMac from '@/components/Keyboard/Mac';
import React, { useEffect, useState } from 'react';

// Alpabeth testssss
// Speed test with other people
// Multiplayer
// Scary intense soundtracks for 60seconds

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
// Typing speed with mouse only


export default function Challenge() {
  const compiledTextChallenge = level.text.split('');
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
  const [charactersState, setCharactersState] = useState([{}])
  const currentCharacter = compiledTextChallenge[currentCharacterIndex];

  // Functions
  // ===================================================================s

  const ignoredKeys = ['Shift', 'Control', 'Alt', 'CapsLock', 'Tab', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
  function characterPress(e) {

    if (ignoredKeys.includes(e.key)) {
      return;
    }

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
      // TODO: 
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
    checkIfGameEnds()
  }, [currentCharacterIndex]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentCharacterIndex, compiledTextChallenge]);

  return (
    <main className="overflow-hidden bg-[#2c303b]">
      <div className="mx-auto max-w-4xl">
        WPM
        Accuracy
        Real Accuracy
        <div className="my-20 text-gray-200">
          <CharacterList textList={compiledTextChallenge} state={charactersState} isActive={currentCharacterIndex} />
        </div>
        <KeyboardMac />
      </div>
    </main>
  )
}
