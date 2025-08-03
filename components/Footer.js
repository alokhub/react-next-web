import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>© {new Date().getFullYear()} NewsHub. All rights reserved.</div>
    </footer>
  );
}
