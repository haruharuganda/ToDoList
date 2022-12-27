import react, { useState } from "react";
import Input from "./Input";

const Head = ({ cards, setCards }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addCardHandler = () => {
    let working = true;
    const newCards = {
      id: cards.length + 1,
      title: title,
      content: content,
      working: working,
    };

    setCards([...cards, newCards]);
  };

  return (
    <header className="header">
      <div className="input-container">
        <Input current={title} seting={setTitle}>
          제목
        </Input>
        <Input current={content} seting={setContent}>
          내용
        </Input>
      </div>
      <div className="button">
        <button onClick={addCardHandler}>추가하기</button>
      </div>
    </header>
  );
};
export default Head;
