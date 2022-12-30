import styled from "styled-components";

import ToDoList from "./ToDoList";

const Main = ({ cards, setCards }) => {
  const deleteCardsHandler = (id) => {
    const newCardsList = cards.filter((cards) => cards.id !== id);
    setCards(newCardsList);
  };

  const finishCardsHandler = (id) => {
    const newCardsList = cards.map((todo, index) => {
      if (id === index) {
        return { ...todo, working: !todo.working };
      } else return { ...todo, id: index };
    });
    setCards(newCardsList);
  };

  {
    console.log(cards.id);
  }
  return (
    <Body>
      <h2>Working.. 🔥</h2>
      <List>
        {cards.map((cards) => {
          if (cards.working) {
            return (
              <ToDoList
                cards={cards}
                key={cards.id}
                deleteCardsHandler={deleteCardsHandler}
                finishCardsHandler={finishCardsHandler}
              />
            );
          } else return null;
        })}
      </List>

      <h2>Done..! 🎉</h2>
      <List>
        {cards.map((cards) => {
          if (!cards.working) {
            return (
              <ToDoList
                cards={cards}
                key={cards.id}
                deleteCardsHandler={deleteCardsHandler}
                finishCardsHandler={finishCardsHandler}
              />
            );
          } else return null;
        })}
      </List>
    </Body>
  );
};
export default Main;

const Body = styled.main`
  display: block;
  padding: 0 24px;
`;

const List = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
