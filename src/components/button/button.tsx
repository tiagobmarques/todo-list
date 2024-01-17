import styles from "./button.module.css";

type ButtonProps = {
  color?: boolean;
  text: string;
  onClick?: () => void;
};

function Button({ color, text, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${color ? styles.red : ""}`}
    >
      <p>{text}</p>
    </button>
  );
}

export default Button;
