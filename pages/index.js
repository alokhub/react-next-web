


import Head from "next/head";
import NewsList from "../components/NewsList";
import RightSideArticleList from "../components/RightSideArticleList";
import styles from "../styles/HomeNews.module.css";
import { DEMO_MAIN_ARTICLES, DEMO_SIDEBAR_ARTICLES } from "@/constants";
import L1Nav from "../components/L1Nav";

export default function Home() {



  return (
    <>
      <Head>
        <title>NewsHub - Latest News</title>
        <meta name="description" content="Stay updated with the latest news from around the world." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.left}>
          <NewsList articles={[...DEMO_MAIN_ARTICLES,...DEMO_MAIN_ARTICLES,...DEMO_MAIN_ARTICLES,...DEMO_MAIN_ARTICLES,...DEMO_MAIN_ARTICLES]} />
        </div>
        <div className={styles.right}>
          <RightSideArticleList articles={[DEMO_SIDEBAR_ARTICLES,...DEMO_SIDEBAR_ARTICLES,...DEMO_SIDEBAR_ARTICLES,...DEMO_SIDEBAR_ARTICLES]} title="Alok" />
          <RightSideArticleList articles={DEMO_SIDEBAR_ARTICLES} />
          <RightSideArticleList articles={DEMO_SIDEBAR_ARTICLES} />
          <RightSideArticleList articles={DEMO_SIDEBAR_ARTICLES} />
        </div>
      </div>
    </>
  );
}
