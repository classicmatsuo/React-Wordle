import React, { useEffect, useState } from "react";

export default function Keypad({ usedKeys, handleKeyup }) {
  const [letters, setLetters] = useState(null);

  useEffect(() => {
    fetch("https://valiant-painted-tabletop.glitch.me/letters")
      .then((res) => res.json())
      .then((json) => {
        setLetters(json);
      });
  }, []);

  return (
    <div className="keypad">
      {letters &&
        letters.map((l) => {
          const color = usedKeys[l.key];
          return (
            <div key={l.key} className={color} onClick={handleKeyup}>
              {l.key}
            </div>
          );
        })}
    </div>
  );
}
