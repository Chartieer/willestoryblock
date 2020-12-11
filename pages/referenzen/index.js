import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import StoryblokService from "../../utils/storyblok-service";
import PostList from '../../components/pagelements/PostList';
import Layout from '../../components/Layout';
import Page from '../../components/Page';
import SbEditable from 'storyblok-react';


let easing = [0.175, 0.85, 0.42, 0.96];

const imageVariants = {
  exit: { y: 150, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing
    }
  }
};

const textVariants = {
  exit: { y: 100, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.5, ease: easing }
  }
};

const backVariants = {
  exit: {
    x: 100,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: easing
    }
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: easing
    }
  }
};

const Referenzen = (props) => {
  const [story, setStory] = useState(props.alles.content)

  useEffect(() => {

    StoryblokService.initEditorFC(setStory)
    window.scrollTo(0, 0);
  }, []);


  return (
    <Layout>
      <PostList posts={props.posts} />
      {story && <Page content={story} />}

    </Layout>
  );
};

Referenzen.getInitialProps = async ({ query }) => {
  StoryblokService.setQuery(query);

  let res2 = await StoryblokService.get('cdn/stories/referenzen',
    {
      //"resolve_relations": "featured-posts.posts"
    })

  const res = await StoryblokService.get("cdn/stories", {
    starts_with: "referenzen/",
  });



  return {
    alles: res2.data.story,
    posts: res.data.stories,
  };


};

export default Referenzen;