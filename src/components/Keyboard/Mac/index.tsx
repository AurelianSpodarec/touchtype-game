import keyboardLayoutMac from "./mac-keyboard-layout";

function KeyboardMac() {

  const renderKey = (key, rowIndex, keyIndex) => (
    <div key={keyIndex} className="key">
      <div className={`key-content key-${key.type}`}>
        <span>{key.shiftSymbol}</span>
        <span>{key.label}</span>
      </div>
    </div>
  );

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
