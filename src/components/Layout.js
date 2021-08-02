import Head from 'next/head';
import styles from '../styles/Layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Lafen Lesley';
export const siteTitle = 'Blog | Lafen Lesley';
const siteDescription =
  'This is my blog website where I write a little about me and much about Web Development';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content={siteDescription} />
        <meta
          property='og:image'
          content='https://avatars.githubusercontent.com/u/53891955?v=4'
        />
        <meta property='og:title' content={siteTitle} />
        <meta property='og:description' content={siteDescription} />
        <meta property='og:url' content='https://lesleytech.github.io/blog' />
        <meta
          name='twitter:card'
          content='https://avatars.githubusercontent.com/u/53891955?v=4'
        />
      </Head>
      <header className={styles.header}>
        {home && (
          <>
            <img
              src='images/profile.jpg'
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href='/'>
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
