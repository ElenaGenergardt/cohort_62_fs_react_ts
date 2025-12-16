import { useState } from "react";

import {HomeworkContainer, HomeworkContainerH1} from "./styles";
import Feedback from "components/Feedback/Feedback";

function Homework_07() {
  const [like, setLike] = useState<number>(0);
  const [dislike, setDislike] = useState<number>(0);

  const onLike = () => {
    setLike((prevValue: number) => {
      return prevValue + 1;
    });
  };

  const onDislike = () => {
    setDislike((prevValue: number) => prevValue + 1);
  };

  const resetResults = () => {
    setLike(0);
    setDislike(0);
  };
  return (
    <HomeworkContainer>
      <HomeworkContainerH1>Homework_07_Feedback</HomeworkContainerH1>
      <Feedback
        like={like}
        dislike={dislike}
        onLike={onLike}
        onDislike={onDislike}
        resetResult={resetResults}
      />
    </HomeworkContainer>
  );
}

export default Homework_07;
