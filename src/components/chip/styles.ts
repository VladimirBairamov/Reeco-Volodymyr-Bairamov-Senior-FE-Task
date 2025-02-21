import styled from "styled-components";

export const ChipContainer = styled.div<{ $color?: string }>`
  background-color: ${({ $color }) => $color || "#228be6"};
  color: white;
  font-size: 1.75rem;
  line-height: 3.25rem;
  padding-inline: 1.25rem;
  border-radius: 4rem;
  white-space: nowrap;
`;
