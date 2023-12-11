import "./Game.css";
import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";
import { useState } from "react";

const actions = {
  rock: ["scissors"],
  paper: ["rock"],
  scissors: ["paper"]
};

function randomAction() {
  const keys = Object.keys(actions);
  const index = Math.floor(Math.random() * keys.length);

  return keys[index];
}

function calculateWinner(action1, action2) {
  if (action1 === action2) {
    return 0;
  } else if (actions[action1].includes(action2)) {
    return -1;
  } else if (actions[action2].includes(action1)) {
    return 1;
  }

  // This should never really happen
  return null;
}



function ActionIcon({ action, ...props }) {
  const icons = {
    rock: FaHandRock,
    paper: FaHandPaper,
    scissors: FaHandScissors
  };
  const Icon = icons[action];
  return <Icon {...props} />;
}

function Player({ name = "Player", score = 0, action = "rock" }) {
  return (
    <div className="player">
      <div className="score">{`${name}: ${score}`}</div>
      <div className="action">
        {action && <ActionIcon action={action} size={60} />}
      </div>
    </div>
  );
}

function ActionButton({ action = "rock", onActionSelected }) {
  return (
    <button className="round-btn" onClick={() => onActionSelected(action)}>
      <ActionIcon action={action} size={20} />
    </button>
  );
}

function ShowWinner({winner = 0}) {
  const text = {
    "-1": "Kazandınız!",
    0: "Eşitsiniz!",
    1: "Kaybettiniz!",
  };

  return (
    <h2>{text[winner]}</h2>
  )
}

function Game() {
  const [playerAction, setPlayerAction] = useState(""); //null
  const [computerAction, setComputerAction] = useState(""); //null

  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [winner, setWinner] = useState(0);



  const onActionSelected = (selectedAction) => {
    const newComputerAction = randomAction();

    setPlayerAction(selectedAction);
    setComputerAction(newComputerAction);

    const newWinner = calculateWinner(selectedAction, newComputerAction);
    setWinner(newWinner);
    if (newWinner === -1) {
      setPlayerScore(playerScore + 1);
    } else if (newWinner === 1) {
      setComputerScore(computerScore + 1);
    }
  };

  return (
    <div className="center">
      <h1>Taş Kağıt Makas</h1>
      <div>
        <div className="container">
          <Player name="Siz" score={playerScore} action={playerAction} />
          <Player
            name="Bilgisayar"
            score={computerScore}
            action={computerAction}
          />
        </div>
        <div>
          <ActionButton action="rock" onActionSelected={onActionSelected} />
          <ActionButton action="paper" onActionSelected={onActionSelected} />
          <ActionButton action="scissors" onActionSelected={onActionSelected} />
        </div>
        <ShowWinner winner={winner}/>
      </div>
    </div>
  );
}

export default Game;