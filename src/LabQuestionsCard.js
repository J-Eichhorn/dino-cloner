import React, { useState } from "react";

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
            } else {
              rightOrWrong("./images/mr_dna_wrong.png");
            }
          }}
        >
          {option}
        </Button>
      </ButtonGroup>
    );
  });

  return (
    <div>
      <h2 className="question-text">{randomQuestion?.question}</h2>
      {answers}
    </div>
  );
}

export default LabQuestionsCard;
