import styled from "styled-components";

const Input = ({ current, children, seting }) => {
  return (
    <div className="input-group">
      <InputLabel>{children}</InputLabel>
      <AddInput
        type={"text"}
        value={current}
        onChange={(e) => seting(e.target.value)}
      ></AddInput>
    </div>
  );
};
export default Input;

const InputLabel = styled.div`
  margin-right: 20px;
`;

const AddInput = styled.input`
  border: none;
  border-radius: 12px;
  height: 40px;
  padding: 0 12px;
  width: 240px;
`;
