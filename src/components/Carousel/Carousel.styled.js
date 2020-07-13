import styled from "styled-components";
const Container = styled.div`
  display: inline-flex;
  flex-wrap: nowrap;
  overflow: hidden;
`;

const Chevron = styled.button`
  position: absolute;
  z-index: 1;
  top: 112px;
  left: ${(props) => (props.right ? "calc(100% - 145px)" : "80px")};
  height: fit-content;
  border: 0;
  background: rgba(255, 255, 255, 0.5);
  width: 50px;
  transform: translate(15px, 155px);
  height: 300px;
`;

const Header = styled.p`
  width: 100%;
  font-size: 24px;
  font-weight: 800;
  margin: 1rem;
`;

export { Container, Chevron, Header };
