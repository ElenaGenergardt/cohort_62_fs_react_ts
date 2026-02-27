import { createContext, useState } from "react";
import { MainWrapper, MainTitle } from "./styles";
import Button from "components/Button/Button";
import Card from "../Card/Card";
import type { UserMessage, UserMessageContext } from "./types";
import Input from "components/Input/Input";

export const BlogManagementContext = createContext<UserMessageContext>({
  message: { message: "" },
  setMessage: () => {},
});
function BlogManagement() {
  const [message, setMessage] = useState<UserMessage>({ message: "" });

  const [inputText, setInputText] = useState("");

  const handlePost = () => {
    setMessage({ message: inputText });
    setInputText("");
  };

  return (
    <BlogManagementContext.Provider value={{ message, setMessage }}>
      <MainWrapper>
        <MainTitle>Мой блог</MainTitle>
        <Input
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
          placeholder="Напишите сообщение для блога:"
          id={""}
          name={""}
          label={""}
        />
        <Button name="Post" onClick={handlePost} />
        <Card />
      </MainWrapper>
    </BlogManagementContext.Provider>
  );
}

export default BlogManagement;
