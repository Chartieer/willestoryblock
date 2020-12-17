import React, { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';
import { ThemeProvider } from 'react-jss'
import '../styles/globals.css';

import theme from '../styles/theme';

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

    <ThemeProvider theme={theme}>
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp


