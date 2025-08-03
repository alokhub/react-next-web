import Link from "next/link";
import styles from '../styles/HeaderSidebar.module.css';

export default function HeaderSidebar({ open, onClose }) {
  return (
    <>
      <div
        className={open ? styles.sidebarOverlayOpen : styles.sidebarOverlay}
        onClick={onClose}
        style={{ display: open ? 'block' : 'none' }}
      />
      <aside className={open ? styles.sidebarOpen : styles.sidebar}>
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close sidebar"
        >
          ×
        </button>
        <nav className={styles.sidebarNav}>
          <Link href="/">Home</Link>
          <Link href="/world">World</Link>
          <Link href="/business">Business</Link>
          <Link href="/tech">Tech</Link>
          <Link href="/sports">Sports</Link>
        </nav>
      </aside>
    </>
  );
}
