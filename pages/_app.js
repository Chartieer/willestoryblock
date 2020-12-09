import React, { useEffect } from 'react';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    // initGA();
    //logPageView();
    //Router.router.events.on('routeChangeComplete', logPageView);

    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);


  return <Component {...pageProps} />
}

export default MyApp
