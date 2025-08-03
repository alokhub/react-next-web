import Link from "next/link";
import styles from '../styles/L1Nav.module.css';
import { NAV_LINKS } from '../constants';

export default function L1Nav() {
  return (
    <nav className={styles.l1nav}>
      {NAV_LINKS.map(link => (
        <Link key={link.href} href={link.href} className={styles.l1navItem}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
