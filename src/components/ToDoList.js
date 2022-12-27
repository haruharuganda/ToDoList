import CustomButton from "./CustomButton";

const ToDoList = (props) => {
  return (
    <div key={props.cards.id} className="content-box">
      <h2>{props.cards.title}</h2>
      <div>{props.cards.content}</div>
      <div className="buttons">
        <CustomButton
          ClassName="delete-button"
          onClick={() => props.deleteCardsHandler(props.cards.id)}
        >
          삭제하기
        </CustomButton>

        <CustomButton
          ClassName="finish-button"
          onClick={() => props.finishCardsHandler(props.cards.id)}
          working={props.cards.working}
        >
          완료
        </CustomButton>
      </div>
    </div>
  );
};

export default ToDoList;
