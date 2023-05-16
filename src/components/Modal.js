import React from "react";

export default function Modal({ isCorrect, solution, turn }) {
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>Dude, are you like a genius or somethin?!</h1>
          <p className="solution">{solution}</p>
          <p>You found the solution in {turn} guesses :)</p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Dude, cmon..</h1>
          <p className="solution">{solution}</p>
          <p>What's wrong with you? :)</p>
        </div>
      )}
    </div>
  );
}
