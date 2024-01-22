import Image from "next/image";
import { Aldrich } from "next/font/google";
import styles from "./page.module.css";

const aldrich = Aldrich({  weight: ['400'], subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${styles.main} ${styles.center}`}>
    <h1><b>
      <div className={styles.main_text_div}>
        <p className={styles.main_text}>Hack&nbsp;&nbsp;</p>
        &nbsp;
        <p className={styles.main_text}>4&nbsp;&nbsp;</p>
        &nbsp;
        <p className={styles.main_text}>All</p>
      </div>
    </b></h1>
    </main>
  );
}
