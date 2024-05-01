import { IButtonProps } from "./Button.types";
import { ButtonContainer } from "./Button.styles";

export function Button({ variant = "primary" }: IButtonProps) {
  return <ButtonContainer variant={variant}>enviar</ButtonContainer>;
}
