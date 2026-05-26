import "./Button.css";

export default function CustomButton({ text, icon, onClick, type = "button" }) {
  return (
    <button type={type} className="custom-button" onClick={onClick}>
      {text}
      {icon}
    </button>
  );
}
