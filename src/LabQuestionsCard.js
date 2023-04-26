import React, { useState } from "react";
import {CountdownCircleTimer} from "react-countdown-circle-timer"
import { ButtonGroup, Button } from "@mui/material";
function LabQuestionsCard({
  showQuestions,
  randomQuestion,
  handleDinoSelector,
  rightOrWrong,
}) {
  const [click, setClick] = useState(false);

  const answers = randomQuestion?.options?.map((option) => {
    return (
      <ButtonGroup>
        <Button variant="contained"
          key={option}
          disabled={click}
          onClick={() => {
            showQuestions();
            setClick(true);
            if (option === randomQuestion.answer) {
              handleDinoSelector();
              rightOrWrong("./images/mr_dna_right.png");
              stopTimer()
            } else {
              rightOrWrong("./images/mr_dna_wrong.png");
              stopTimer()
            }
          }}
        >
          {option}
        </Button>
      </ButtonGroup>
    );
  });

  const [timer, setTimer] = useState(true)
  const [display, setDisplay] = useState('flex')

  function stopTimer() {
    setTimer(false)
    setDisplay('none')
  }

  return (
    <div>
      <h2 className="question-text">{randomQuestion?.question}</h2>
      {answers}
      <br />
      <div className="timer-wrapper" style={{display: display}} >
        <CountdownCircleTimer
          size={110}
          isPlaying={timer}
          duration={5}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[5, 4, 2, 0]}
          onComplete={() => (setClick(true), showQuestions(), rightOrWrong("./images/mr_dna_wrong.png"), setDisplay('none'))}
        >
        </CountdownCircleTimer>
      </div>
    </div>
  );
}

export default LabQuestionsCard;
