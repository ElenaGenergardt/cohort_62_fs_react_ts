import { type Dispatch, type SetStateAction } from "react";

export interface UserMessage {
  message: string;
}

export interface UserMessageContext {
  message: UserMessage;
  setMessage: Dispatch<SetStateAction<UserMessage>>;
}
