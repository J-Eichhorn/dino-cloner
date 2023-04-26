import React, { useState } from "react";

import { ButtonGroup, Button } from "@mui/material";
function LabQuestionsCard({
  showQuestions,
  randomQuestion,
  handleDinoSelector,
}) {
  const [click, setClick] = useState(false);

  const answers = randomQuestion?.options?.map((option) => {
    return (
      <ButtonGroup variant="contained">
        <Button
          key={option}
          disabled={click}
          onClick={() => {
            showQuestions();
            setClick(true);
            if (option === randomQuestion.answer) {
              handleDinoSelector();
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
      <h2>{randomQuestion?.question}</h2>
      {answers}
    </div>
  );
}

export default LabQuestionsCard;
