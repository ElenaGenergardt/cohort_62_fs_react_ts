import { useNavigate } from "react-router-dom";
import { InfoClients, ClientsInfo, LogoImg, ButtonControl } from "./styles";
import Button from "components/Button/Button";

function X_Ivision() {

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  
  return (
    <InfoClients>
      <ClientsInfo>Briefly about us</ClientsInfo>
      <LogoImg
        src="https://iconape.com/wp-content/png_logo_vector/x-vision-logo.png"
        alt="Logo"
      />
      <ButtonControl>
        <Button onClick={goBack} name="Go back" />
      </ButtonControl>
    </InfoClients>
  );
}

export default X_Ivision;
