import Image from "next/image";
import { Aldrich } from "next/font/google";
import styles from "../page.module.css";

const aldrich = Aldrich({  weight: ['400'], subsets: ["latin"] });

export default function Home() {
  return (
    <div>
    <main className={`${styles.main} ${aldrich.Aldrich}`}>
    <div className={styles.center}>
    <h1><b>
      <div className={styles.main_text_div}>
        Contact Us
      </div>
    </b></h1>
    </div>
    </main>
    </div>
  );
}
