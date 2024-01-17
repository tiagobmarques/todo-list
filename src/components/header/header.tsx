import todoImg from "./../../assets/images/todo-ico.png";
import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.container}>
      <img className={styles.image} src={todoImg} alt="Logo todo" />
      <nav>
        <a>Inicial</a>
        <a>Sobre</a>
        <a>Tarefas</a>
      </nav>
    </header>
  );
}

export default Header;
