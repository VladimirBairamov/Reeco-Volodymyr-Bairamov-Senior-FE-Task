import { ChipContainer } from "./styles";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  color?: string;
}

export const Chip = ({ children, onClick, color }: Props) => {
  return (
    <ChipContainer onClick={onClick} $color={color}>
      {children}
    </ChipContainer>
  );
};
