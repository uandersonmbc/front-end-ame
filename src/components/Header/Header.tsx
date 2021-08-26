import Link from "next/link";
import styles from "./styles.module.scss";

export default function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <b>Busca Kitsu</b> Teste Front-End
        </a>
      </Link>
      <span>Uanderson Nunes</span>
    </header>
  );
}
