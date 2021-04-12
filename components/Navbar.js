import React from "react";
import styles from "../styles/Navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.maxWidthWrapper}>
        <div>
          <Link href="/">
            <a>
              <img
                src="/beetv-logo.svg"
                alt="BeeTV Logo"
                className={styles.logo}
              />
            </a>
          </Link>
        </div>
        <div>
          <button className={styles.signInButton}>Sign in</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
