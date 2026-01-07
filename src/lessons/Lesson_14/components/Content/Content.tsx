// ШАГ 4: Импортируем хук useContext из библиотеки react
import { useContext } from "react";
import { ContentInfo, ContentTitle, ContentWrapper } from "./styles";
// ШАГ 5: Импортируем созданный нами в компонте Main контекст MainContext
import { MainContext } from "../Main/Main";
import Button from "components/Button/Button";
function Content(){

  // ШАГ 6: Получить доступ к данным, хранящимся в контексте
// const userData = useContext(MainContext);

const {userData, setUserData} = useContext(MainContext);

  const deleteUser = () => {
    setUserData(undefined);
  };

  return (
    <ContentWrapper>
      <ContentTitle>Content Component</ContentTitle>
      {userData && (
        <>
          <ContentInfo>FullName: {userData.fullName}</ContentInfo>
          <ContentInfo>Age: {userData.age}</ContentInfo>
          <ContentInfo>Job: {userData.jobPosition}</ContentInfo>
          <Button isRed name="Delete User" onClick={deleteUser} />
        </>
      )}
    </ContentWrapper>
  );
}

export default Content;
