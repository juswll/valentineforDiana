import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Диана, ты уверена? -_-",
  "Диана...",
  "Pooookie pls",
  "ДИАНАААААА -_-",
  "Все с тобой панятна!",
  "Ты мне больше не подруга!!!!!",
  "ПОЖАЛУЙСТА",
  "У тебя нет выбора",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 23;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="kittens kissing"
            src="https://usagif.com/wp-content/uploads/gif/monkey-hug-9.gif"
          />
          <h1 className="my-4 text-4xl">ой Діаночка Дмитрівна, я знала, що ви скажете так :D И опять мы лпшки</h1>
        </>
      ) : (
        <>
          <img
            alt="kittens hugging"
            src="https://i.pinimg.com/originals/6f/fc/ea/6ffcea109acaebd134b599f423a2f231.gif"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine, Diana?</h1>
          <div className="flex items-center">
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
