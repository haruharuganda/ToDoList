import styled from "styled-components";

import CustomButton from "./CustomButton";

const ToDoList = (props) => {
  return (
    <ContentBox key={props.cards.id}>
      <CustomButton>상세페이지</CustomButton>
      <h2>{props.cards.title}</h2>
      <div>{props.cards.content}</div>
      <Button>
        <CustomButton
          bordercolor="green"
          onClick={() => props.deleteCardsHandler(props.cards.id)}
        >
          삭제하기
        </CustomButton>

        <CustomButton
          ClassName="finish-button"
          bordercolor="red"
          onClick={() => props.finishCardsHandler(props.cards.id)}
          working={props.cards.working}
        >
          완료
        </CustomButton>
      </Button>
    </ContentBox>
  );
};

export default ToDoList;

const ContentBox = styled.div`
  width: 300px;
  border: 4px solid teal;
  border-radius: 10px;
  padding: 10px 24px 24px;
`;

const Button = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 5px;
`;
