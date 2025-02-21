import { Button } from "../button";
import { Container, Description, Title, Image } from "./styled";

interface Props {
  title: string;
  description: string;
  imageSrc?: string;
  buttonText?: string;
  width?: React.CSSProperties["width"];
}

export const Card = ({
  title,
  description,
  imageSrc,
  buttonText,
  width,
}: Props) => {
  return (
    <Container $width={width}>
      {imageSrc && <Image src={imageSrc} alt={title} />}
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button>{buttonText}</Button>
    </Container>
  );
};
