import useKeyboard from "../useKeyboard";
import keyboardLayoutMac from "./mac-keyboard-layout";

function KeyboardMac() {
  const pressedKeys = useKeyboard();
  // pressedKeys [] if any matches the key.code put calss 'active'
  function renderKey(key, rowIndex, keyIndex) {
    const isActive = pressedKeys.includes(key.key) //"r" === key.key
    console.log("wop", pressedKeys)
    return (
      <div key={keyIndex} className={`key is-active w-full key-${key.type}`}>
        <div className={`key-content key-${key.symbolType} ${isActive ? "key-content-is-active" : ""}`}>
          {key.symbol &&
            <span>{key.shiftSymbol}</span>
          }
          <span className="w-full">{key.label}</span>
        </div>
      </div>
    )
  };

  const renderRow = (row, rowIndex) => (
    <div key={rowIndex} className="keyboadr-inner">
      {row.map((key, keyIndex) => renderKey(key, rowIndex, keyIndex))}
    </div>
  );

  return (
    <div className="keyboard">
      {keyboardLayoutMac.keys.map((row, rowIndex) => renderRow(row, rowIndex))}
    </div>
  );
};

export default KeyboardMac;
