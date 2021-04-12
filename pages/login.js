import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/Login.module.scss";
import { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <Head>
        <title>Login | BeeTV 🐝📺</title>
      </Head>
      <div className={styles.hero}>
        <Navbar />
        <section className={styles.signInBlock}>
          <form action="">
            <h1>Sign in</h1>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email">Password</label>
              <input
                id="email"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <button type="submit" className={styles.signInButton}>
              Sign In
            </button>
            <p>
              New to BeeTV?{" "}
              <Link href="/">
                <a>Sign up now.</a>
              </Link>
            </p>
          </form>
        </section>
      </div>
    </div>
  );
}
