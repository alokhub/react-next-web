import styles from '../styles/NewsList.module.css';

export default function NewsList({ articles }) {
  return (
    <div className={styles.newsList}>
      {articles.map((article, idx) => (
        <div key={idx} className={styles.newsItem}>
          <img src={article.image} alt={article.title} className={styles.image} />
          <div className={styles.content}>
            <h2 className={styles.title}>{article.title}</h2>
            <p className={styles.summary}>{article.summary}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
