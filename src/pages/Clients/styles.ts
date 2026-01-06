import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: center;
  gap: 60px;
`;

export const ClientsName = styled(Link)`
  display: flex;
  font-size: 40px;
`;
