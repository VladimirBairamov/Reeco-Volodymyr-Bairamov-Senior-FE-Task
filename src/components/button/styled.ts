import styled from "styled-components";

export const ButtonContainer = styled.button`
  background-color: #228be6;
  font-size: 1.75rem;
  font-weight: 600;
  color: white;
  padding: 1rem 1rem;
  border-radius: 0.25rem;
  border: 1px solid transparent;
  cursor: pointer;
  margin-top: 2rem;
  transition-duration: 0.1s;
  border-radius: 1rem;

  &:hover {
    background-color: #1c7ed6;
  }

  &:active {
    transform: translateY(0.15rem);
  }
`;
