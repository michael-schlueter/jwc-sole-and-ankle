import styled from "styled-components";

import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Main></Main>
    </>
  );
}

const Main = styled.main`
  padding: 64px 32px;
`;

export default App;
