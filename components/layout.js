import Head from 'next/head';
import Footer from './footer';
import Header from './header';

export default function Layout({ children, title, description, ogImage }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={description} key="title" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${process.env.VERCEL_URL}/${ogImage}`} />
      </Head>
      <div className="container">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}
