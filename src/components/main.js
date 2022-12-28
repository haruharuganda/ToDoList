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

  return (
    <main className="body">
      <h2>Working.. 🔥</h2>
      <div className="list">
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
      </div>

      <h2>Done..! 🎉</h2>
      <div className="list">
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
        <div className="list"></div>
      </div>
    </main>
  );
};
export default Main;
