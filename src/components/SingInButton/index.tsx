import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi"
import styles from "./styles.module.scss";

export function SingInButton() {
  const isUserLogged = false;

  return isUserLogged ? (
    <button className={styles.singInButton} type="button">
      <FaGithub color="#eba417" />
      Sing in with GitHub
    </button>
  ) : (
    <button className={styles.singInButton} type="button">
      <FaGithub color="#04d361" />
      JoaoVasc
      <FiX 
      className={styles.closeIcon}
      color="#737380" />
    </button>
  );
}
