import "./CTA.scss";

function CTA({ text, className, onClick }) {
  return (
    <>
      <button className={"CTA " + className} onClick={onClick}>
        {text}
      </button>
    </>
  );
}

export default CTA;
