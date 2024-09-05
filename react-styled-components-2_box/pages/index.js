import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import styled from "styled-components";

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => (props.isBlack ? "black" : "white")};
  transition: background-color 0.3 ease;

  &:hover {
    background-color: red;
  }
`;

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

export default function HomePage() {
  return (
    <Container>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <StyledBox />
      <StyledBox $isBlack />
    </Container>
  );
}
