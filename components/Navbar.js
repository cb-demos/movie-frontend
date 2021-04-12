import React from "react";
import styles from "../styles/Navbar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = ({ showLogin }) => {
  const router = useRouter();
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
        {showLogin && (
          <div>
            <button
              type="button"
              onClick={() => router.push("/login")}
              className={styles.signInButton}
            >
              Sign in
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
