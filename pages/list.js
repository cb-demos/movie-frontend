import React from "react";
import Head from "next/head";
import LoggedInNavbar from "../components/LoggedInNavbar";
import styles from "../styles/List.module.scss";

const List = () => {
  return (
    <div>
      <Head>
        <title>BeeTV 🐝📺</title>
      </Head>
      <div className={styles.heroContainer}>
        <LoggedInNavbar />
        <div className={styles.hero}>
          <img src="/beemovie-logo.png" alt="Bee movie logo" />
          <p>
            Barry B. Benson, a bee who has just graduated from college, is
            disillusioned at his lone career choice: making honey. On a special
            trip outside the hive, Barry's life is saved by Vanessa, a florist
            in New York City.
          </p>
        </div>
      </div>
    </div>
  );
};

export default List;
