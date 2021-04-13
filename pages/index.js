import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.scss";
import { useState } from "react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>BeeTV 🐝📺</title>
      </Head>
      <div className={styles.hero}>
        <Navbar showLogin={true} />
        <section className={styles.heroText}>
          <h1>Limited movies, TV shows, and more related to bees.</h1>
          <p>Watch forever. Cancel never.</p>
          <small>Ready to get started? Enter your email to get started.</small>
          <div className={styles.buttonWrapper}>
            <GetStartedButton />
          </div>
        </section>
      </div>
      <div className={styles.more}>
        <section>
          <div>
            <h2>Enjoy on any device.</h2>
            <p>
              Watch BeeTV on any device you have. Smart TVs, Smartphones, Smart
              watches, and more.
            </p>
          </div>
          <div>
            <img src="/phone-mockup.png" alt="Bee movie on a phone" />
          </div>
        </section>
      </div>
    </div>
  );
}

const GetStartedButton = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form className={styles.getStartedButton} onSubmit={handleSubmit}>
      <label htmlFor="email">Your email address</label>
      <input
        id="email"
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <button>
        Get Started
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </form>
  );
};
