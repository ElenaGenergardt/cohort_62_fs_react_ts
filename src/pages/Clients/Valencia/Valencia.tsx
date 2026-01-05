import { useNavigate } from "react-router-dom";
import { InfoClients, ClientsInfo, LogoImg, ButtonControl } from "./styles";
import Button from "components/Button/Button";

function Valencia() {

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  
  return (
    <InfoClients>
      <ClientsInfo>Briefly about us</ClientsInfo>
      <LogoImg
        src="https://iconape.com/wp-content/png_logo_vector/world-trade-center-valencia-logo.png"
        alt="Logo"
      />
      <ButtonControl>
        <Button onClick={goBack} name="Go back" />
      </ButtonControl>
    </InfoClients>
  );
}

export default Valencia;
