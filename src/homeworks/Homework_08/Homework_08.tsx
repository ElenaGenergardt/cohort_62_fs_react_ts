import Input from "components/Input/Input";
import { PageWrapper, Paragraph, ButtonControl } from "./styles";
import Button from "components/Button/Button";

function Homework_08() {
  return (
    <PageWrapper>
      <Paragraph>Homework 08</Paragraph>

      <ButtonControl>
        <Button isDisabled name="Disabled" />
      </ButtonControl>

      <ButtonControl>
        <Button isRed name="Red" />
      </ButtonControl>

      <Input name="email" label="Email" isDisabled={true} placeholder="Disabled" />

      <Input name="email" label="Email" isDisabled={false} placeholder="Введите email" />

      <Input name="email" label="Email" error="Некорректный email" placeholder="Некорректный email"/>
    </PageWrapper>
  );
}

export default Homework_08;
