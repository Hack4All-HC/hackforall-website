import Link from "next/link";
import { Lexend } from "next/font/google";
import styles from "../src/app/page.module.css";

const lexend = Lexend({  weight: ['400'], subsets: ["latin"] });

const Navbar = () => {
    return (
      <div className={`${styles.topnav} ${lexend.Lexend}`}>
        <b>
          <a href="https://hcb.hackclub.com/donations/start/hack4all" className={styles.topnav_text}>Donate</a>
          <a href="/events" className={styles.topnav_text}>Events</a>
          <a href="/contact" className={styles.topnav_text}>Contact Us</a>
        </b>
      </div>
      );
};

export default Navbar;