import react, { useState } from "react";
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
    <header className="header">
      <div className="input-container">
        <div className="input-container">
          <div className="input-group">
            <label className="input-label">제목</label>
            <input
              type={"text"}
              className="add-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="input-container">
          <div className="input-group">
            <label className="input-label">내용</label>
            <input
              type={"text"}
              className="add-input"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></input>
          </div>
        </div>
      </div>
      <div className="button">
        <button onClick={addCardHandler}>추가하기</button>
      </div>
    </header>
  );
};
export default Head;
