import { type InputProps } from "./types";
import { InputWrapper, InputLabel, InputComponent } from "./styles";
function Input({
  id,
  name,
  type,
  placeholder,
  label,
  isDisabled = false,
  error,
}: InputProps) {
  return (
    <InputWrapper className="input-wrapper">
      <InputLabel className="input-label" htmlFor={id}>
        {label}
      </InputLabel>
      <InputComponent
        className="input-component"
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={isDisabled}
        error={error}
      />
    </InputWrapper>
  );
}

export default Input;
