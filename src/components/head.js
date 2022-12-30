import react, { useState } from "react";
import styled from "styled-components";

import Input from "./Input";

const Head = ({ cards, setCards }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addCardHandler = () => {
    const newCards = {
      id: cards.length + 1,
      title: title,
      content: content,
      working: true,
    };

    setCards([...cards, newCards]);
    setTitle("");
    setContent("");
  };

  return (
    <Header>
      <InputContainer>
        <Input
          type={"text"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        >
          제목
        </Input>
        <Input
          type={"text"}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        >
          내용
        </Input>
      </InputContainer>
      <Buttonbox>
        <Button onClick={addCardHandler}>추가하기</Button>
      </Buttonbox>
    </Header>
  );
};
export default Head;

const Header = styled.header`
  background-color: #eee;
  display: flex;
  align-items: center;

  justify-content: space-between;
`;
const InputContainer = styled.div`
  display: flex;
  padding: 30px;
  gap: 10px;
`;
const Buttonbox = styled.div`
  padding: 30px;
`;

const Button = styled.button`
  background-color: teal;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-weight: 700;
  height: 40px;
  width: 140px;
`;
