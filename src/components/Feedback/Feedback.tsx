import Button from "components/Button/Button";
import {FeedbackWrapper, FeedbackControl, ButtonwithcountContainer, Count} from "./styles";
import { type FeedbackProps } from "./types";

function Feedback({
  like,
  dislike,
  onLike,
  onDislike,
  resetResult,
}: FeedbackProps) {
  return (
    <FeedbackWrapper className="feedback-wrapper">
      <FeedbackControl className="feedback-control">
        <ButtonwithcountContainer className="buttonwithcount-container">
          <Button name="Like" onClick={onLike} />
          <Count className="count">{like}</Count>
        </ButtonwithcountContainer>

        <ButtonwithcountContainer className="buttonwithcount-container">
          <Button name="Dislike" onClick={onDislike} />
          <Count className="count">{dislike}</Count>
        </ButtonwithcountContainer>
      </FeedbackControl>
      
      <Button name="Reset Results" onClick={resetResult} />
    </FeedbackWrapper>
  );
}

export default Feedback;
