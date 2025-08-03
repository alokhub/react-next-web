import styles from '../styles/RightSideArticleList.module.css'; // Adjust the path as necessary

export default function RightSideArticleList({ articles, title = "Latest" }) {
  return (
    <aside className={styles.sidebar}>
      <h3>{title}</h3>
      <ul>
        {articles.map((article, idx) => (
          <li key={idx}>
            <a href="#">{article.title}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
