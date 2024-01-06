import React from "react";
import { ICharacterState } from "./ICharacter";

interface ICharacterProps {
  character: React.ReactNode;
  state: ICharacterState;
  isActive: boolean;
}

const Character = React.memo(({ character, state, isActive }: ICharacterProps) => {
  
  const statusClass: any = {
    correct: "#555d68",
    wrong: "#bc616a",
    corrected: "orange"
  };

  return (
    <span className="min-w-2 outline-1 outline-white text-2xl" style={{ color: statusClass[state?.status], background: isActive ? "#4ca3ee" : "" }}>
      {character}
    </span>
  );
},
  (prevProps, nextProps) => prevProps.character === nextProps.character && prevProps.state === nextProps.state
);

export default Character;
