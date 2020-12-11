import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import StoryblokService from '../../utils/storyblok-service';
import { createUseStyles, useTheme } from 'react-jss';
import Layout from '../../components/Layout';
import Page from '../../components/Page';
import DynamicComponent from '../../components/DynamicComponent';
import Logo from '../../components/pagelements/Logo';


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

  container: {
    margin: '0 4vw'
  },

  aboutext: {
    color: '#fff',
    fontSize: '14vw',
    lineHeight: '.11',
    fontWeight: 600,
    letterSpacing: '-.04em'
  },

  right: {
    textAlign: 'end'
  }

}))

/**
 * Referenz Page
 * @todo Content Loop 
 * @
 */
const Referenz = (props) => {
  const [story, setStory] = useState(props.post)

  useEffect(() => {




    StoryblokService.initEditorFC(setStory)
    //window.scrollTo(0, 0);
  }, []);


  const theme = useTheme()
  const classes = useStyles({ props, theme })

  return (
    <Layout>
      {console.log("STORY", story)}

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

      {story.content.Body.map((blok) => (
        <DynamicComponent blok={blok} key={blok._uid} />
      ))}

      <div data-v-2100d41e="" className={classes.container}>
        <div data-v-2100d41e="" className="about-description">
          <div data-v-2100d41e="" data-scroll="" className="about-text-wrapper">
            <Logo />
            <h3>___</h3>
            <h1 data-v-2100d41e="" className={`${classes.aboutext} ${classes.right}`}>
              BODEN
            </h1>
          </div>
          <div data-v-2100d41e="" data-scroll="" className="about-text-wrapper is-inview">
            <h1 data-v-2100d41e="" className={classes.aboutext}>
              MANUFAKTUR
            </h1></div><div data-v-2100d41e="" data-scroll="" className="about-text-wrapper is-inview">
            <h1 data-v-2100d41e="" className={classes.aboutext}> BASED
              <span data-v-2100d41e="" className="detail-text" style={{ left: '-140%', color: '#fff' }}>

              </span>
            </h1>
          </div>
          <div data-v-2100d41e="" data-scroll="" className="about-text-wrapper is-inview">
            <h1 data-v-2100d41e="" className={classes.aboutext}>
              DORTMUND
            </h1>
          </div>
        </div>
        <div data-v-2100d41e="" className="contact-mail"><a data-v-2100d41e="" href="mailto:hello@klocko.com" target="_blank" rel="noopener" className="view-all-cta"> contact
          <div data-v-06f4c95b="" data-v-2100d41e="" className="link-wrapper"> hello@Elklocko.com <div data-v-06f4c95b="" className="unerline-wrapper"><span data-v-06f4c95b="" className="underline"></span>
            <span data-v-06f4c95b="" className="underline"></span>
          </div>
          </div>
        </a>
        </div>
      </div>
    </Layout >
  );
};


Referenz.getInitialProps = async ({ query, asPath }) => {

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