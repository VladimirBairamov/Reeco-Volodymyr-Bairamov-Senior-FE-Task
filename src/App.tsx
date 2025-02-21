import { Card } from "./components/card";
import { Chip } from "./components/chip";
import { Slider } from "./components/slider";
import { mockedCards } from "./mocks/cards";
import { mockedChips } from "./mocks/chips";
import {
  Container,
  ExampleContainer,
  Header,
  Section,
  SectionColumns,
  SectionTitle,
  Subtitle,
  Title,
} from "./styled";

const cards = mockedCards.map((card) => (
  <Card
    key={card.title}
    title={card.title}
    description={card.description}
    imageSrc={card.imageSrc}
    buttonText={card.buttonText}
  />
));

const differentSizesCards = mockedCards.map((card) => (
  <Card
    key={card.title}
    title={card.title}
    description={card.description}
    imageSrc={card.imageSrc}
    buttonText={card.buttonText}
    width={`${Math.random() * 20 + 25}rem`}
  />
));

const chips = mockedChips.map((chip) => (
  <Chip key={chip.text} color={chip.color}>
    {chip.text}
  </Chip>
));

export const App = () => {
  return (
    <Container>
      <Header>
        <Title>Slider Component</Title>
        <Subtitle>Demo</Subtitle>
      </Header>

      <Section id="horizontal-cards">
        <SectionTitle href="#horizontal-cards">
          Horizontal slider with cards
        </SectionTitle>
        <ExampleContainer $code>{`<Slider>{cards}</Slider>`}</ExampleContainer>
        <ExampleContainer>
          <Slider>{cards}</Slider>
        </ExampleContainer>
      </Section>

      <Section id="horizontal-chips">
        <SectionTitle href="#horizontal-chips">
          Horizontal slider with chips
        </SectionTitle>
        <ExampleContainer $code>{`<Slider>{chips}</Slider>`}</ExampleContainer>
        <ExampleContainer>
          <Slider>{chips}</Slider>
        </ExampleContainer>
      </Section>

      <Section id="vertical">
        <SectionTitle href="#vertical">
          Vertical slider with cards and chips
        </SectionTitle>
        <ExampleContainer
          $code
        >{`<Slider orientation="vertical">{cards}</Slider>
<Slider orientation="vertical">{chips}</Slider>`}</ExampleContainer>
        <SectionColumns>
          <ExampleContainer $height="500px">
            <Slider orientation="vertical">{cards}</Slider>
          </ExampleContainer>
          <ExampleContainer $height="500px">
            <Slider orientation="vertical">{chips}</Slider>
          </ExampleContainer>
        </SectionColumns>
      </Section>

      <Section id="transition-step">
        <SectionTitle href="#transition-step">
          Horizontal slider with cards and transition step size
        </SectionTitle>
        <ExampleContainer
          $code
        >{`<Slider transitionStep={250}>{cards}</Slider>`}</ExampleContainer>
        <ExampleContainer>
          <Slider transitionStep={250}>{cards}</Slider>
        </ExampleContainer>
      </Section>

      <Section id="different-content-sizes">
        <SectionTitle href="#different-content-sizes">
          Horizontal slider with cards and different content sizes
        </SectionTitle>
        <ExampleContainer
          $code
        >{`<Slider>{differentSizesCards}</Slider>`}</ExampleContainer>
        <ExampleContainer>
          <Slider>{differentSizesCards}</Slider>
        </ExampleContainer>
      </Section>
    </Container>
  );
};
