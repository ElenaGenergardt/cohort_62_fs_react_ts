import styled from "@emotion/styled";

interface InputStyleProps {
  isDisabled?: boolean;
  error?: string;
}

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InputLabel = styled.label`
  font-size: 16px;
  color: hsl(0, 0%, 44%);
`;

export const InputComponent = styled.input<InputStyleProps>`
  border: 1px solid ${(props) => (props.error ? "red" : "#3f3f3f")};
  width: 100%;
  height: 50px;
  border-radius: 4px;
  padding: 12px;
  outline: none;
  background-color: ${(props) => (props.disabled ? "gray" : "white")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  ::placeholder {
    color: ${(props) => (props.disabled ? "white" : " #6f6f6f")};
    font-size: 16px;
  }
`;
