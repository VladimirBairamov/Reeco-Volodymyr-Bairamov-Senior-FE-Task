import styled from "styled-components";

export const Container = styled.div<{ $width?: React.CSSProperties["width"] }>`
  background-color: white;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  box-shadow: 0px 1px 3px 0px #0000000d, 0px 10px 15px -5px #0000000d,
    0px 7px 7px -5px #0000000d;
  width: ${({ $width }) => $width || "42.5rem"};
  min-width: ${({ $width }) => $width || "42.5rem"};
  border: 1px solid #dee2e6;
  padding: 2.5rem;
  box-sizing: border-box;
`;

export const Image = styled.img`
  margin-inline: -2.5rem;
  margin-top: -2.5rem;
`;

export const Title = styled.p`
  font-size: 2rem;
  font-weight: 500;
  font-size: 2rem;
  line-height: 1.55;
  margin-top: 2rem;
  margin-bottom: 1.25rem;
`;

export const Description = styled.p`
  font-size: 1.75rem;
  line-height: 1.55;
  color: #868e96;
  margin: 0;
`;
