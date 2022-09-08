import '../styles/globals.css';
import NavItems from '../src/components/NavItems';

function MyApp({ Component, pageProps }) {
  return <>
    <NavItems />
    <Component {...pageProps} />
    {/* replace with an actual footer */}
    this is a footer 
  </>
}

export default MyApp;
