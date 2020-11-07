import "./App.css";
import styled from "styled-components";

const TitleWrapper = styled.div`
  display: flex;
  align-item: center;
  justify-comtent: space-between;
  padding: 8px 16px;
  border: 1px solid ${(props) => props.theme.colors.green};
  background-color: ${(props) => props.theme.colors.green};
`;
const Top = styled.div`
  color: ${(props) => props.theme.colors.yellow};
  margin: 0 auto;
  font-size: 35px;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.blue};
`;

function App() {
  return (
    <TitleWrapper>
      <Top>Todolist</Top>
    </TitleWrapper>
  );
}

export default App;
