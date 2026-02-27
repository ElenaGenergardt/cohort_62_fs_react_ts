import { useContext } from "react";
import { BlogManagementContext } from "../BlogManagement/BlogManagement";
import { MessageText } from "./styles";
function Message() {
  const { message } = useContext(BlogManagementContext);

  return (
    <>
      <MessageText>{message.message}</MessageText>
    </>
  );
}

export default Message;
