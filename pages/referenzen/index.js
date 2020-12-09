import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import StoryblokService from "../../utils/storyblok-service";
import PostList from '../../components/pagelements/PostList';


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

const Post = (props) => {
  useEffect(() => {
    StoryblokService.initEditor(this)
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="container">
      <PostList posts={props.posts} />
    </div>
  );
};

Post.getInitialProps = async ({ query }) => {
  StoryblokService.setQuery(query);

  const res = await StoryblokService.get("cdn/stories", {
    starts_with: "referenzen/",
  });


  return {
    posts: res.data.stories,
  };


};

export default Post;