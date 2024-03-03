import Image from "next/image";
import { Aldrich } from "next/font/google";
import styles from "./page.module.css";

const aldrich = Aldrich({  weight: ['400'], subsets: ["latin"] });


export default function Home() {
  return (
    <div>
      <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js"></script>
      <main className={`${styles.main} ${aldrich.Aldrich}`}>
        <div className={styles.center}>
        <h1><b>
          <div className={styles.main_text_div}>
            <img src="HACK.png" alt="HACK" className={`${styles.hack} ${styles.hvr}`}></img>
              <a className={styles.filler}>&nbsp;&nbsp;</a>&nbsp;
              <img src="4.png" alt="4" className={`${styles.four} ${styles.hvr}`}></img>
              <a className={styles.filler}>&nbsp;&nbsp;</a>&nbsp;
            <img src="ALL.png" alt="ALL" className={`${styles.all} ${styles.hvr}`}></img>
          </div>
        </b></h1>
        <br></br>
        <div className={styles.topscroll}>
          Who We Are
          <div className={`${styles.arrow} ${styles.bounce}`}></div>
        </div>
        </div>
      </main>
    </div>
  );
}
