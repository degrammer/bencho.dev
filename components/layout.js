import Head from 'next/head';
import Footer from './footer';
import Header from './header';

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="container">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}
