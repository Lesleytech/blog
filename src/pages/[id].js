import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import cx from 'classnames';

import utilStyles from '../styles/utils.module.css';
import Date from '../components/Date';
import { getAllPostIds, getPostData } from '../lib/post';
import Layout from '../components/Layout';

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
        <meta
          property='og:image'
          content='https://avatars.githubusercontent.com/u/53891955?v=4'
        />
        <meta property='og:title' content={postData.title} />
        <meta
          property='og:url'
          content={`https://lesleytech.github.io/blog/${postData.id}`}
        />
        <meta
          name='twitter:card'
          content='https://avatars.githubusercontent.com/u/53891955?v=4'
        />
      </Head>
      <article>
        <header>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className='d-flex align-center'>
            <address>
              <a
                href='https://github.com/lesleytech'
                rel='author'
                className='d-flex align-center'
              >
                <Image
                  src='/images/profile.jpg'
                  width='38px'
                  height='38px'
                  className={utilStyles.borderCircle}
                />
                <small className='ml-1'>Lafen Lesley</small>
              </a>
            </address>
            <span className={cx(utilStyles.lighterText, 'mx-1')}>&bull;</span>
            <small className={utilStyles.lightText}>
              <Date dateString={postData.date} />
            </small>
          </div>
        </header>
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
