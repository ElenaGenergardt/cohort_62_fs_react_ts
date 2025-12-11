import { useState ,type FormEvent, type ChangeEvent} from "react";

import Button from "components/Button/Button";
import Input from "components/Input/Input";

import {
  PageWrapper,
  Paragraph,
  FormElementContainer,
  FormElement,
  ListElement,
  TegLi,
} from "./styles";

function Homework_09() {
  const [notice, setNotice] = useState<string>("");
  const [list, setList] = useState<string[]>([]);

  const onChangeNotice = (event: ChangeEvent<HTMLInputElement>) => {
    setNotice(event.target.value);
  };

  const handleAddNotice = () => {
    setList([...list, notice.trim()]);
    setNotice("");
  };
  const addElement = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleAddNotice();
  };
  return (
    <PageWrapper>
      <Paragraph>Homework 09</Paragraph>
      <FormElement onSubmit={addElement}>
        <FormElementContainer>
          <Input
            id="id"
            label="Список дел"
            name="Список"
            placeholder="Введите действие"
            value={notice}
            onChange={onChangeNotice}
          />
        </FormElementContainer>
        <FormElementContainer>
          <Button name="Add" type="submit" />
        </FormElementContainer>
      </FormElement>
      <FormElementContainer>
        <ListElement>
          {list.map((item) => (
            <TegLi>{item}</TegLi>
          ))}
        </ListElement>
      </FormElementContainer>
    </PageWrapper>
  );
}
export default Homework_09;
