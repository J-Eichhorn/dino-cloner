import React from "react";
import LabQuestionsCard from "./LabQuestionsCard";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { MyContext } from "./MyProvider";

function LabQuestionsContainer({ question }) {
  const { newDino } = useContext(MyContext);

  const [question1, setQuestion1] = useState(false);

  useEffect(() => {
    setQuestion1(true);
  }, []);

  const [question2, setQuestion2] = useState(false);
  const [question3, setQuestion3] = useState(false);
  const [finalize, setFinalize] = useState(false);

  function showQuestions() {
    if (question2 === false) {
      setQuestion2(true);
    } else if (question3 === false) {
      setQuestion3(true);
    } else if (finalize === false) {
      setFinalize(true);
    }
  }

  const navigate = useNavigate();

  const [dinoselector, setDinoSelector] = useState(0);

  function handleDinoSelector() {
    setDinoSelector((dinoselector) => dinoselector + 1);
  }

  const [name, setName] = useState("");

  let dinoImage = "";
  let dinoSpecies = "";
  switch (dinoselector) {
    case 1:
      dinoImage = "../images/pteradon.png";
      dinoSpecies = "pteradon";
      break;
    case 2:
      dinoImage = "../images/sauropod.png";
      dinoSpecies = "sauropod";
      break;
    case 3:
      dinoImage = "../images/theropod.png";
      dinoSpecies = "theropod";
      break;
  }

  function dinoForm() {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (dinoselector !== null) {
            newDino({
              name: name,
              image: dinoImage,
              dinosaur: dinoSpecies,
            });
          }
          navigate("/EndGame", { state: dinoselector });
        }}
      >
        <label></label>
        <br></br>{" "}
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="submit" className="submit" value="Finalize" />
      </form>
    );
  }

  const [mrDNA, setMrDNA] = useState("./images/mr_dna.png");

  function rightOrWrong(image) {
    setMrDNA(image);
    setTimeout(() => {
      setMrDNA("./images/mr_dna.png");
    }, 1500);
  }

  return (
    <div>
      <div id="question-1" className={`fade-in ${question1 ? "active" : ""}`}>
        <LabQuestionsCard
          handleDinoSelector={handleDinoSelector}
          randomQuestion={question[0]}
          showQuestions={showQuestions}
          rightOrWrong={rightOrWrong}
        />
      </div>
      <div id="question-2" className={`fade-in ${question2 ? "active" : ""}`}>
        {question2 ? (
          <LabQuestionsCard
            handleDinoSelector={handleDinoSelector}
            randomQuestion={question[1]}
            showQuestions={showQuestions}
            rightOrWrong={rightOrWrong}
          />
        ) : null}
      </div>
      <div id="question-3" className={`fade-in ${question3 ? "active" : ""}`}>
        {question3 ? (
          <LabQuestionsCard
            handleDinoSelector={handleDinoSelector}
            randomQuestion={question[2]}
            showQuestions={showQuestions}
            rightOrWrong={rightOrWrong}
          />
        ) : null}
      </div>

      <div id="dna">
        <img style={{ width: 200, height: "auto" }} src={mrDNA} />
      </div>
      <div id="finalize">{finalize ? dinoForm() : null}</div>
    </div>
  );
}

export default LabQuestionsContainer;
