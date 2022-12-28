function CustomButton({ ClassName, onClick, children, working }) {
  let text = children;
  if (!working && text === "완료") {
    text = "취소";
  }
  return (
    <button className={ClassName} onClick={onClick}>
      {text}
    </button>
  );
}

export default CustomButton;
