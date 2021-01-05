import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import StoryblokService from "../../utils/storyblok-service";
import SbEditable from 'storyblok-react';
import Layout from '../../components/Layout';
import Page from '../../components/Page';
import Lala from '@components/pagelements/lala';
import HScroller from '@components/pagelements/HorizontalScroller';

const Manufaktur = (props) => {


  useEffect(() => {

    //StoryblokService.initEditorFC(setStory)
    //window.scrollTo(0, 0);
  }, []);


  return (
    <Layout template="gray">
      <Lala />
      <HScroller />
      <div style={{ height: "8200px" }}>

      </div>
    </Layout>
  );
};

Manufaktur.getInitialProps = async ({ query }) => {
  // ADD CMS HERE
  return {}
};

export default Manufaktur;