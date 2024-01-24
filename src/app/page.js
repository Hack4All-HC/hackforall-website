import Image from "next/image";
import { Aldrich } from "next/font/google";
import styles from "./page.module.css";

const aldrich = Aldrich({  weight: ['400'], subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
    hello
    </main>
  );
}
