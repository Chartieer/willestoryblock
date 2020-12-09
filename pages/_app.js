import React, { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';

import '../styles/globals.css'

function MyApp({ Component, pageProps, router }) {




  useEffect(() => {
    // initGA();
    //logPageView();
    //Router.router.events.on('routeChangeComplete', logPageView);

    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, [])



  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp



