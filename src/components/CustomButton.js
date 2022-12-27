function CustomButton(props) {
  const { ClassName, onClick, children, working } = props;

  let text = children;
  console.log(working);
  if (!working && text === "완료") {
    console.log(working);
    text = "취소";
  }
  return (
    <button className={ClassName} onClick={onClick}>
      {text}
    </button>
  );
}

export default CustomButton;
