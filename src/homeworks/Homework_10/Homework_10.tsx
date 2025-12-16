import { useEffect, useState } from "react";
import { PageWrapper, Text, ErrorText, Card, ContainerFacts } from "./styles";
import Button from "components/Button/Button";
import axios from "axios";

function Homework_10() {
  const [randomJoke, setRandomJoke] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);

  const RANDOM_JOKE = "https://official-joke-api.appspot.com/random_joke";

  const getRandonJoke = async () => {
    try {
      setRandomJoke(undefined);
      setError(undefined);

      const response = await axios.get(RANDOM_JOKE);
      setRandomJoke(response.data.setup);

    } catch (error: any) {
      setError("Some Network Error");
    }
  };

  useEffect(() => {
    getRandonJoke();
  }, []);

  return (
    <PageWrapper>
      <Card>
        <ContainerFacts>
          <Text>{randomJoke}</Text>
          <ErrorText>{error}</ErrorText>
        </ContainerFacts>
        <Button name={"New joke"} onClick={getRandonJoke} />
      </Card>
    </PageWrapper>
  );
}

export default Homework_10;
