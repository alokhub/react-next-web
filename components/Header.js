
import { useState } from "react";
import Link from "next/link";
import styles from '../styles/Header.module.css';
import HeaderSidebar from './HeaderSidebar';
import { getFormattedTodayDate } from '../utils';

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const today = getFormattedTodayDate();

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
        <div className={styles.date}>{today}</div>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/world">World</Link>
          <Link href="/business">Business</Link>
          <Link href="/tech">Tech</Link>
          <Link href="/sports">Sports</Link>
        </nav>
      </header>
      <HeaderSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}
