import Button from "components/Button/Button";
import {CounterWrapper, ButtonControl, Count} from "./styles";
import { type CounterProps } from "./types";

function Counter({ count, onMinus, onPlus }: CounterProps) {
  return (
    <CounterWrapper className="counter_wrapper">

      <ButtonControl className="button_control">
        <Button name="-" onClick={onMinus} />
      </ButtonControl>

      <Count className="count">{count}</Count>

      <ButtonControl className="button_control">
        <Button name="+" onClick={onPlus} />
      </ButtonControl>

    </CounterWrapper>
  );
}

export default Counter;
