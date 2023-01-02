import Head from 'next/head';
import Footer from './footer';
import Header from './header';

export default function Layout({ children, title, description, ogImage }) {
  const defaultImage = `${process.env.BASE_PATH}/bot.png`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={description} key="title" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage || defaultImage} />
      </Head>
      <div className="container">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}
