export interface ICharacter {
  character: string;
}

export interface ICharacterState {
  corrected: boolean;
  status: "correct" | "wrong" | "corrected" | "default";
}
