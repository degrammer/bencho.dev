import Head from 'next/head';
import Footer from './footer';
import Header from './header';

export default function Layout({ children, title, description, ogImage, pageName }) {
  const pageUrl = `https://${process.env.VERCEL_URL}/${pageName}`;
  const image = `https://${process.env.VERCEL_URL}/${ogImage}`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} key="title" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={`https://${process.env.VERCEL_URL}`} />
        <meta property="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>
      <div className="container">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}
