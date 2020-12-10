import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import StoryblokService from '../../utils/storyblok-service';
import { createUseStyles, JssContext, useTheme } from 'react-jss';


/**
 * 
 *  Framer Motion Animationen
*/
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
      duration: .5,
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



/*
* JSS styles
**/

const useStyles = createUseStyles(theme => ({
  headline: {
    color: '#fff',
    fontSize: '3rem',
    background: theme.colorzwei
  },

}))

/**
 * Referenz Page
 * @todo Content Loop 
 * @
 */
const Referenz = (props) => {
  useEffect(() => {
    StoryblokService.initEditor(this)
    window.scrollTo(0, 0);
  }, []);


  const theme = useTheme()
  const classes = useStyles({ ...props, theme })

  return (
    <div className="container post">
      <motion.div initial="exit" animate="enter" exit="exit">
        <motion.img width="100%" variants={imageVariants} src={props.post.content.headimage.filename} />

        <motion.div variants={textVariants}>
          <h1 className={classes.headline} >loremUt magna incididunt cillum et aliqua enim.</h1>
          <p>{props.post.text}</p>
        </motion.div>

        <motion.div variants={backVariants}>
          <Link href="/referenzen">
            <a>Back to list</a>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};


Referenz.getInitialProps = async ({ asPath, query }) => {

  StoryblokService.setQuery(query)

  let language = query.language || "en"
  let trimDefault = asPath.replace("/en/referenzen", "/referenzen")
  let res = await StoryblokService.get(`cdn/stories${trimDefault}`)

  let post = res.data.story
  return {
    post,
    language,

  }
};

export default Referenz;