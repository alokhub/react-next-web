
import { useState } from "react";
import styles from '../styles/Header.module.css';
import HeaderSidebar from './HeaderSidebar';

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div
          className={styles.sidebarIcon}
          onClick={() => setSidebarOpen(true)}
          aria-label="Open sidebar"
          tabIndex={0}
          role="button"
        >
          <span className={styles.menuBar}></span>
          <span className={styles.menuBar}></span>
          <span className={styles.menuBar}></span>
        </div>
        <div className={styles.logo}>NewsHub</div>
        <nav className={styles.nav}>
          <a href="/">Home</a>
          <a href="/world">World</a>
          <a href="/business">Business</a>
          <a href="/tech">Tech</a>
          <a href="/sports">Sports</a>
        </nav>
      </header>
      <HeaderSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}
