import styled from "styled-components";

export type Orientation = "horizontal" | "vertical";
export type Position = "left" | "right" | "top" | "bottom";

type CommonProps = {
  $orientation: Orientation;
};

export const OuterContainer = styled.div<CommonProps>`
  padding: ${({ $orientation }) =>
    $orientation === "horizontal" ? "0 4rem" : "4rem 0"};
  position: relative;
  overflow: hidden;
  width: ${(props) => (props.$orientation === "horizontal" ? "100%" : "auto")};
  height: ${(props) => (props.$orientation === "horizontal" ? "auto" : "100%")};
  box-sizing: border-box;
`;

export const SliderContainer = styled.div<CommonProps>`
  overflow: hidden;
  width: ${(props) => (props.$orientation === "horizontal" ? "100%" : "auto")};
  height: ${(props) => (props.$orientation === "horizontal" ? "auto" : "100%")};
`;

export const SliderContent = styled.div<
  CommonProps & {
    $position: number;
  }
>`
  display: flex;
  gap: 2rem;
  flex-direction: ${(props) =>
    props.$orientation === "horizontal" ? "row" : "column"};
  transition: transform 0.3s ease-in-out;
  transform: ${(props) =>
    props.$orientation === "horizontal"
      ? `translateX(${props.$position}px)`
      : `translateY(${props.$position}px)`};
`;

const buttonPositionStyles: Record<Position, string> = {
  left: "left: 0; top: 50%; transform: translateY(-50%);",
  right: "right: 0; top: 50%; transform: translateY(-50%) rotate(180deg);",
  top: "top: 0; left: 50%; transform: translateX(-50%) rotate(90deg);",
  bottom: "bottom: 0; left: 50%; transform: translateX(-50%) rotate(270deg);",
};

export const SliderButton = styled.button<{ $position: Position }>`
  opacity: 0.85;
  background-color: white;
  border: 1px solid #dee2e6;
  cursor: pointer;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  position: absolute;

  ${({ $position }) => buttonPositionStyles[$position]}

  &:hover {
    opacity: 1;
  }

  svg {
    width: 2rem;
    height: 2rem;
  }
`;
