import Image from 'next/image';
import styles from '../styles/NewsList.module.css';

export default function NewsList({ articles }) {
  return (
    <div className={styles.newsList}>
      {articles.map((article, idx) => (
        <div key={idx} className={styles.newsItem}>
          <Image
            src={article.image}
            alt={article.title}
            className={styles.image}
            width={160}
            height={100}
            style={{ objectFit: 'cover', borderRadius: '6px' }}
          />
          <div className={styles.content}>
            <h2 className={styles.title}>{article.title}</h2>
            <p className={styles.summary}>{article.summary}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
