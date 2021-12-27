import Head from 'next/head'
import Link from 'next/link';
import { getAllPostsForHome } from "../lib/api"
import styles from './index.module.css';  
import Layout from '../components/Layout';

export async function getStaticProps({ preview = false }){
    const allPosts = (await getAllPostsForHome(preview))  ?? [];

    return {
        props: { preview, allPosts }
    }
}


interface Props {
  allPosts: [] | [unknown];
}

export function Index({ allPosts = [] }: Props) {

  return (
    <Layout>
        <div className={styles.container}>
        <Head>
            <title data-cy="title">{"Ryan's Ramblings"}</title>
            <meta name="description" content="Ryan's posting random stuff" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
            <div className={styles.grid}>
            {
                allPosts.length > 0 ? (
                allPosts.map(({ title, subHeader, tags, sys : { id } }) => (
                    <div className={styles.card} key={id} data-cy="post">
                    <div className={styles.details}>
                        <Link href={`posts/${id}`}>
                        <a data-cy="post-title">
                          {title}
                          <p data-cy="post-date">
                          {new Date(subHeader).toISOString().substring(0, 10)}
                          </p>
                          <p data-cy="post-tags">
                          {tags}
                          </p>
                        </a>
                        </Link>
                    </div>
                    </div>
                ))
                ) : (
                <div className={styles.card}>
            </div>
                )
            }
            </div>
        </main>
        <footer className={styles.footer} data-cy="footer">
            <p>Sorry for posting</p>
        </footer>
        </div>
        </Layout>
    )
  }

export default Index;

