import { useEffect, useRef, useState } from "react";
import {
  SliderContainer,
  Orientation,
  SliderContent,
  SliderButton,
  OuterContainer,
} from "./styled";
import { Arrow } from "../../icons/arrow";

interface Props {
  children: React.ReactNode;
  orientation?: Orientation;
  transitionStep?: number;
}

type SliderDirection = "left" | "right";

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

export const Slider = ({
  children,
  orientation = "horizontal",
  transitionStep,
}: Props) => {
  const [position, setPosition] = useState(0);
  const [showNext, setShowNext] = useState(true);
  const [showPrevious, setShowPrevious] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isHorizontal = orientation === "horizontal";

  useEffect(() => {
    const updateButtons = () => {
      if (containerRef.current && contentRef.current) {
        const containerSize = isHorizontal
          ? containerRef.current.clientWidth
          : containerRef.current.clientHeight;
        const contentSize = isHorizontal
          ? contentRef.current.scrollWidth
          : contentRef.current.scrollHeight;

        setShowPrevious(position < 0);
        setShowNext(position > -(contentSize - containerSize));
      }
    };

    updateButtons();
    window.addEventListener("resize", updateButtons);

    return () => window.removeEventListener("resize", updateButtons);
  }, [position, isHorizontal]);

  const moveSlider = (direction: SliderDirection) => {
    if (!containerRef.current || !contentRef.current) return;

    const containerSize = isHorizontal
      ? containerRef.current.clientWidth
      : containerRef.current.clientHeight;
    const contentSize = isHorizontal
      ? contentRef.current.scrollWidth
      : contentRef.current.scrollHeight;
    const minPosition = -(contentSize - containerSize);

    let newPosition = position;

    if (transitionStep) {
      newPosition =
        direction === "left"
          ? position + transitionStep
          : position - transitionStep;
    } else {
      const itemsElements = Array.from(
        contentRef.current.children
      ) as HTMLDivElement[];
      const currentItemIndex = itemsElements.findIndex(
        (child) =>
          (isHorizontal ? child.offsetLeft : child.offsetTop) >= -position
      );

      const nextItemIndex =
        direction === "left"
          ? Math.max(0, currentItemIndex - 1)
          : Math.min(itemsElements.length - 1, currentItemIndex + 1);
      const nextItem = itemsElements[nextItemIndex];

      if (nextItem) {
        newPosition = isHorizontal ? -nextItem.offsetLeft : -nextItem.offsetTop;
      }
    }

    setPosition(clamp(newPosition, minPosition, 0));
  };

  return (
    <OuterContainer $orientation={orientation}>
      <SliderContainer ref={containerRef} $orientation={orientation}>
        <SliderContent
          ref={contentRef}
          $orientation={orientation}
          $position={position}
        >
          {children}
        </SliderContent>
      </SliderContainer>
      {showPrevious && (
        <SliderButton
          $position={isHorizontal ? "left" : "top"}
          onClick={() => moveSlider("left")}
        >
          <Arrow />
        </SliderButton>
      )}

      {showNext && (
        <SliderButton
          $position={isHorizontal ? "right" : "bottom"}
          onClick={() => moveSlider("right")}
        >
          <Arrow />
        </SliderButton>
      )}
    </OuterContainer>
  );
};
