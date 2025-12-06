
import { type ButtonProps } from "./types";
import {ButtonComponent} from "./styles";


function Button({ name = "Send", type = "button", onClick , isRed = false , isDisabled = false} : ButtonProps) {
  return (
    <ButtonComponent $isRed={isRed} disabled={isDisabled} className="button_component" type={type} onClick={onClick}>
      {name}
    </ButtonComponent>
  );
}
export default Button;