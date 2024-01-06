import Character from "./Character";
import { ICharacter, ICharacterState } from "./ICharacter";

function CharacterList({ textList, state, isActive }: { textList: ICharacter[], state: ICharacterState }) {
  console.log("@@@@@@@@@@@@@@@", isActive)
  return textList.map((text, index: number) => {
    const active = isActive === index;
    console.log("(9999999999999999", isActive, index)
    return <Character key={index} character={text} state={state[index]} isActive={isActive === index} />
  });
}

export default CharacterList;
