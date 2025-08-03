

import Header from "../components/Header";
import Footer from "../components/Footer";
import L1Nav from "../components/L1Nav";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <L1Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
