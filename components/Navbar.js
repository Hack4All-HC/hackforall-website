import Link from "next/link";
import { Lexend } from "next/font/google";
import styles from "../src/app/page.module.css";

const lexend = Lexend({  weight: ['400'], subsets: ["latin"] });

const Navbar = () => {
    return (
      <div className={`${styles.topnav} ${lexend.Lexend}`}>
        <b>
          <a href="#sponsors" className={styles.topnav_text}>Sponsors Us</a>
          <a href="#events" className={styles.topnav_text}>Events</a>
          <a href="https://hcb.hackclub.com/donations/start/hack4all" className={styles.topnav_text}>Donate</a>
        </b>
      </div>
      );
};

export default Navbar;