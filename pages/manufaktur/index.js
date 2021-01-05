import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import StoryblokService from "../../utils/storyblok-service";
import SbEditable from 'storyblok-react';
import PostList from '../../components/pagelements/PostList';
import Layout from '../../components/Layout';
import Page from '../../components/Page';
import Teaser01 from '../../components/pagelements/teaser01';
import BigBlock from '../../components/pagelements/BigBlock';
import Teaser02 from 'components/pagelements/Teaser02';


const Manufaktur = (props) => {


  useEffect(() => {

    //StoryblokService.initEditorFC(setStory)
    //window.scrollTo(0, 0);
  }, []);


  return (
    <Layout>
      <Teaser01 />
      <BigBlock />
      <Teaser02 />

    </Layout>
  );
};

Manufaktur.getInitialProps = async ({ query }) => {
  // ADD CMS HERE
  return {}
};

export default Manufaktur;