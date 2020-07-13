import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const Img = styled.img`
  background-color: gray;
  opacity: 0;
  border: 0;
  animation: ${(props) => (props.animate ? fadeIn : "")} 0.5s linear forwards;
  @media (max-width: 480px) {
    width: 120px;
    height: 120px;
  }
`;

export { Img };
