import "./CTA.scss";

function CTA({ type ="button", onClick, text, className }) {
  return (
    <>
        <button
          type={type}           
          onClick={onClick}  
          className={"CTA " + className}
        >
          {text}
        </button>
    </>
  );
}

export default CTA;
