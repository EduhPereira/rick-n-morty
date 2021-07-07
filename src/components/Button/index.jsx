import "./styles.css";
export const Button = ({ Func, children }) => {
  return (
    <button className="Btn" onClick={Func}>
      {children}
    </button>
  );
};
