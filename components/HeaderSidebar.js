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
          <a href="/">Home</a>
          <a href="/world">World</a>
          <a href="/business">Business</a>
          <a href="/tech">Tech</a>
          <a href="/sports">Sports</a>
        </nav>
      </aside>
    </>
  );
}
