import NewsList from '@/components/NewsList';
import RightSideArticleList from '@/components/RightSideArticleList';
import styles from '@/styles/HomeNews.module.css';
import { useRouter } from 'next/router';
import { DEMO_SIDEBAR_ARTICLES } from '@/constants';

export default function SectionPage(props) {
    // const router = useRouter();
    // const { section } = router.query;

    return (
        <div>
            <h1>Section: {props.section}</h1>
            <p>This is the dynamic section page.</p>
            <div className={styles.container}>
                <div className={styles.left}>
                    <NewsList articles={props.mainArticles} />
                </div>
                <div className={styles.right}>
                    <RightSideArticleList articles={DEMO_SIDEBAR_ARTICLES} />
                </div>
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    const { section } = context.params;
    const sectionName = section.replaceAll("-", " ");
    console.log(`Fetching data for section: ${sectionName}`);

    const mainArticles = [
        {
            title: `Breaking News in ${sectionName}: Major Event Shakes the World`,
            summary: "A major event has occurred, impacting millions across the globe. Details are still emerging as authorities respond.",
            image: "/globe.svg",
        },
        {
            title: "Tech Giants Announce New Innovations",
            summary: "Leading technology companies have unveiled their latest products and services at a global conference.",
            image: "/next.svg",
        },
        {
            title: "Sports Update: Championship Results",
            summary: "The championship concluded with a thrilling finish. Here are the highlights and reactions from the teams.",
            image: "/vercel.svg",
        },
    ];

    // Here you can fetch data based on the section if needed
    // For example, fetching articles for the specific section

    return {
        props: {
            section: sectionName,
            mainArticles, // Pass the articles to the page
        },
    };
}