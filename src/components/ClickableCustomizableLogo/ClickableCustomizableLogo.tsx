import { Link } from "react-router-dom";
import Image from "../../assets/icm_logo_gray.svg";
import { ImageContent } from "./ClickableCustomizableLogo.styles";

export const ClickableCustomizableLogo = () => {
  return (
    <ImageContent>
      <Link to="https://www.somma-it.com.br" target="_blank">
        <img
          alt="https://www.somma-it.com.br"
          src={Image}
          title="logo home"
          width={300}
          height={300}
        />
      </Link>
    </ImageContent>
  );
};
