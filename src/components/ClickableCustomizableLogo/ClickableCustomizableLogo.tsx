import { Link } from "react-router-dom";
import { ImageContent } from "./ClickableCustomizableLogo.styles";
import { LogoProps } from "./ClickableCustomizableLogo.types";

export const ClickableCustomizableLogo = ({ srcImage, alt }: LogoProps) => {
  return (
    <ImageContent>
      <Link to="https://icaroregis.github.io/portifolio/" target="_blank">
        <img src={srcImage} alt={alt} />
      </Link>
    </ImageContent>
  );
};
