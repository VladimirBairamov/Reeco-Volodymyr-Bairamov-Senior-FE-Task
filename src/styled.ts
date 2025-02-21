import styled from "styled-components";

export const Container = styled.main`
  height: 100%;
`;

export const Header = styled.header`
  background-color: #f8f9fa;
  padding: 4rem;
  border-bottom: 1px solid #e9ecef;
`;

export const Title = styled.h1`
  font-size: 4rem;
  line-height: 1.3;
  margin: 0;
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.p`
  font-size: 2rem;
  margin: 0;
  color: #868e96;
`;

export const Section = styled.section`
  margin: 4rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ExampleContainer = styled.div<{
  $code?: boolean;
  $width?: React.CSSProperties["width"];
  $height?: React.CSSProperties["height"];
}>`
  padding: 2rem;
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 1rem;
  box-sizing: border-box;
  resize: both;
  overflow: auto;
  font-size: 2rem;

  ${({ $width }) => $width && `width: ${$width};`}
  ${({ $height }) => $height && `height: ${$height};`}
  ${({ $code }) =>
    $code ? "font-family: monospace; resize: none; white-space: pre-wrap;" : ""}
`;

export const SectionTitle = styled.a`
  text-decoration: none;
  color: black;
  font-size: 3.25rem;
  font-weight: 700;
  line-height: 1.3;
  margin: 0;
`;

export const SectionColumns = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;
