import react, { useState } from "react";
import styled from "styled-components";

import Navigation from "./Navigation";
import Head from "./head";
import Main from "./main";

//TodoList의 전체적인 컴포넌트 틀
function ToDo() {
  const [cards, setCards] = useState([
    { id: 0, title: "Test1", content: "Test", working: true },
    { id: 1, title: "Test2", content: "Test", working: true },
    { id: 2, title: "Test3", content: "Test", working: true },
  ]);

  return (
    <App>
      <Container>
        <Navigation />
        <Head cards={cards} setCards={setCards} />
        <Main cards={cards} setCards={setCards} />
      </Container>
    </App>
  );
}

export default ToDo;

const App = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 1200px;
`;
