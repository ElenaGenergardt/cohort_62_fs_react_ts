import { PageWrapper, ClientsName } from "./styles";

function Clients() {
  return (
    <PageWrapper>
      <ClientsName to="/valencia">Valencia</ClientsName>
      <ClientsName to="/sigma"> Sigma</ClientsName>
      <ClientsName to="/x_ivision">X Ivision</ClientsName>
    </PageWrapper>
  );
}

export default Clients;
