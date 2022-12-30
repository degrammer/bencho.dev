import Layout from '../components/layout';
import globals from '../styles/globals.css';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Layout {...pageProps}><Component {...pageProps} /></Layout>
}