/* eslint-disable react/prop-types */
export default function Button(props) {
  return (
    <>
      <button className="btn" onClick={props.click}>
        {props.btn}
      </button>
    </>
  );
}
