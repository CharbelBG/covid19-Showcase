import '../styles/globals.css';
import NavItems from '../src/components/NavItems';
import Footer from '../src/components/Footer';
function MyApp({ Component, pageProps }) {
  return <>
    <NavItems />
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp;
