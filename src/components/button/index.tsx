import { ButtonContainer } from "./styled";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ children, onClick }: Props) => {
  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>;
};
