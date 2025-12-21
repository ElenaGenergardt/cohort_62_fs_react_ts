import React, { useState, type ChangeEvent } from "react";
import axios from "axios";
import { v4 } from "uuid";
import type { University } from "./types";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import {
  Card,
  Container,
  ErrorText,
  PageWrapper,
  SearchContainer,
  UniversitiesGrid,
  UniversityCard,
  UniversityDetail,
  UniversityName,
  Text,
  UniversityLink,
} from "./styles";
function Homework_11() {
  const [country, setCountry] = useState<string>("");
  const [universities, setUniversities] = useState<University[]>([]);
  const [error, setError] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const DATA_COUNTRY_UNIVERSITY: string = `http://universities.hipolabs.com/search?country=${country}`;
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };
  const getCountry = async (event: React.FormEvent) => {
    event.preventDefault();
    setUniversities([]);
    setError(undefined);
    setLoading(true);
    try {
      const response = await axios.get<University[]>(DATA_COUNTRY_UNIVERSITY);
      setUniversities(response.data.slice(0, 15));
    } catch (error: any) {
      setUniversities([]);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  const renderUniversityCards = () => {
    return universities.map((university: University) => (
      <UniversityCard key={v4()}>
        <UniversityName>{university.name}</UniversityName>

        <UniversityDetail>Country: {university.country}</UniversityDetail>

        <UniversityDetail>
          <UniversityLink href={university.web_pages[0]}>
            Website: {university.web_pages[0]}{" "}
          </UniversityLink>
        </UniversityDetail>
      </UniversityCard>
    ));
  };
  return (
    <PageWrapper>
      <Card>
        <Text>University Search"</Text>
        <SearchContainer onSubmit={getCountry}>
          <Input
            name={"searchCountry"}
            label="Country"
            placeholder="Enter Country for searching uneversities"
            id={"search"}
            onChange={onChange}
          />
          <Button
            type="submit"
            isDisabled={loading}
            name={"Get Universities"}
          />
        </SearchContainer>
        <Container>
          {!!error && <ErrorText>{error}</ErrorText>}
          <UniversitiesGrid> {renderUniversityCards()}</UniversitiesGrid>
        </Container>
      </Card>
    </PageWrapper>
  );
}

export default Homework_11;
