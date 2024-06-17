/* eslint-disable react/prop-types */
export default function Input(props) {
  return (
    <>
      <input
        type="text"
        placeholder={props.placeholder}
        className="input"
        onChange={props.typing}
      ></input>
    </>
  );
}
