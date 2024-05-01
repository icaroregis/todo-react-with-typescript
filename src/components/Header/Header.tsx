import {
  FirstTitle,
  SecondTitle,
  TitleContainer,
  HeaderContainer,
} from "./Header.styles";
import Rocket from "../../assets/rocket.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={Rocket} alt="Logo da aplicação" />

      <TitleContainer>
        <FirstTitle>to</FirstTitle>
        <SecondTitle>do</SecondTitle>
      </TitleContainer>
    </HeaderContainer>
  );
}
