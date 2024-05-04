import { Container } from "./LoginCard.styles";

interface IButtonProps {
  height?: string;
  width?: string;
  children: any;
}

export const LoginCard = ({ children, height, width }: IButtonProps) => {
  return (
    <Container height={height} width={width}>
      {children}
    </Container>
  );
};
