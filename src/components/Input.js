const Input = (props) => {
  return (
    <div className="input-container">
      <div className="input-group">
        <label className="input-label">{props.children}</label>
        <input
          type={"text"}
          className="add-input"
          value={props.current}
          onChange={(e) => props.seting(e.target.value)}
        ></input>
      </div>
    </div>
  );
};
export default Input;
