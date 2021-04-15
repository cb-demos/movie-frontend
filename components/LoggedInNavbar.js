import React from "react";
import styles from "../styles/Navbar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const LoggedInNavbar = () => {
  const router = useRouter();
  return (
    <nav className={styles.container}>
      <div className={styles.maxWidthWrapper}>
        <div className={styles.navLeft}>
          <Link href="/">
            <a>
              <img
                src="/beetv-logo.svg"
                alt="BeeTV Logo"
                className={styles.logo}
              />
            </a>
          </Link>
          <div className={styles.navItems}>
            <Link href="/list">
              <a>Home</a>
            </Link>
            <Link href="/list">
              <a>TV Shows</a>
            </Link>
            <Link href="/list">
              <a>Movies</a>
            </Link>
          </div>
        </div>
        <div>
          <button
            onClick={() => router.push("/")}
            className={styles.signInButton}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default LoggedInNavbar;
