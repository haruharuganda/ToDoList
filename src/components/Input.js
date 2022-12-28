const Input = ({ current, children, seting, blankchack }) => {
  return (
    <div className="input-container">
      <div className="input-group">
        <label className="input-label">{children}</label>
        <input
          type={"text"}
          className="add-input"
          value={current}
          onChange={(e) => seting(e.target.value)}
        ></input>
      </div>
    </div>
  );
};
export default Input;
