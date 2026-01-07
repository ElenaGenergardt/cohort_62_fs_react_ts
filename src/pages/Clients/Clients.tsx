import { ROUTES } from "constants/routes";
import { PageWrapper, ClientsName } from "./styles";

function Clients() {
  return (
    <PageWrapper>
      <ClientsName to={ROUTES.VALENCIA}>Valencia</ClientsName>
      <ClientsName to={ROUTES.SIGMA}> Sigma</ClientsName>
      <ClientsName to={ROUTES.X_IVISION}>X Ivision</ClientsName>
    </PageWrapper>
  );
}

export default Clients;
