import Image from "next/image";
import { Aldrich } from "next/font/google";
import styles from "./page.module.css";

const aldrich = Aldrich({  weight: ['400'], subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${styles.main} ${aldrich.Aldrich}`}>
    <div className={styles.center}>
    <h1><b>
      <div className={styles.main_text_div}>
        <a className={styles.main_text}>Hack&nbsp;&nbsp;</a>
        &nbsp;
        <a className={styles.main_text}>4&nbsp;&nbsp;</a>
        &nbsp;
        <a className={styles.main_text}>All</a>
      </div>
      <a className={styles.subtext}>Hack 4 free, 4 all, 4 everyone</a>
    </b></h1>
    </div>
    </main>
  );
}
