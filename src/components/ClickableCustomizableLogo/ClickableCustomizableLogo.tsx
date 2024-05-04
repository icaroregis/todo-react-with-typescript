import { Link } from "react-router-dom";
import Logo from "../../assets/IMG_20240504_155217.svg";
import { ImageContent } from "./ClickableCustomizableLogo.styles";

export const ClickableCustomizableLogo = () => {
  return (
    <ImageContent>
      <Link to="https://icaroregis.github.io/portifolio/" target="_blank">
        <img src={Logo} alt="Marca pessoal do autor" />
      </Link>
    </ImageContent>
  );
};
