import { useState } from "react";

import "./styles.css";
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
    <div className="homework_container">
      <h1>Homework_07_Feedback</h1>
      <Feedback
        like={like}
        dislike={dislike}
        onLike={onLike}
        onDislike={onDislike}
        resetResult={resetResults}
      />
    </div>
  );
}

export default Homework_07;
