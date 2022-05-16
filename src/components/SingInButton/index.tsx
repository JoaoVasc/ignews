import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";
import { signIn, signOut ,useSession } from "next-auth/react";

export function SingInButton() {
  const { data: session } = useSession()

  return session ? (
    <button className={styles.singInButton} type="button">
      <img className="userImage" src={session.user.image} alt="" />
      {session.user.name}
      <FiX className={styles.closeIcon} color="#737380" onClick={() => signOut()} />
    </button>
  ) : (
    <button
      className={styles.singInButton}
      type="button"
      onClick={() => signIn("github")}
    >
      <FaGithub color="#eba417" />
      Sing in with GitHub
    </button>
  );
}
