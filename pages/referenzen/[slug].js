import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import StoryblokService from '../../utils/storyblok-service';
import { createUseStyles, useTheme } from 'react-jss';
import Layout from '../../components/Layout';
import Page from '../../components/Page';
import DynamicComponent from '../../components/DynamicComponent';
import BigBlock from '../../components/pagelements/BigBlock';
import LargeImage from '../../components/pagelements/LargeImage';
import HorizontalScroller from '../../components/pagelements/HorizontalScroller';
import Section from '@ui/layout/Section';
import Grid from '../../components/pagelements/grid'
import Paragraph from '../../components/pagelements/Paragraph';



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

  },

  dummy: {
    backgroundColor: 'pink',
    padding: '0.8em',
    marginTop: '0.8em'
  },

  high: {
    lineHeight: '22em'
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
    window.scrollTo(0, 0);
  }, []);


  const theme = useTheme()
  const classes = useStyles({ props, theme })

  return (
    <Layout>


      <div className="container post">
        <motion.div initial="exit" animate="enter" exit="exit">
          <motion.img width="100%" variants={imageVariants} src={props.post.content.headimage.filename} />

          <motion.div variants={textVariants}>
            {/* <h1 className={classes.headline} >loremUt magna incididunt cillum et aliqua enim.</h1>
            <p>{props.post.text}</p> */}
          </motion.div>

          <motion.div variants={backVariants}>
            <Link href="/referenzen">
              <a>Back to list</a>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <Section color="" space="medium">
        <Grid>
          <Grid.Row>
            <Grid.Col sm="12" md="4" lg="4">Deserunt  aute duis nostrud proident consectetur ulelit esse ad laboris fugiat nisi reprehenderit consequat sit ipsum irure eiusmod.</Grid.Col>
            <Grid.Col md="8" lg="8"><Paragraph small>Labore velit reprehenderit minim in qui magna nisi pariatur enim fugiat. Voluptate incididunt id commodo id aliqua consequat veniam ex duis nostrud aute ut pariatur mollit. Aliqua nisi culpa elit enim dolor ipsum adipisicing dolor culpa occaecat ullamco.</Paragraph></Grid.Col>

          </Grid.Row>


          <Grid.Row>
            <Grid.Col sm="3" offset_sm="9" md="4" offset_md="8"><div className={classes.dummy}>off</div></Grid.Col>
          </Grid.Row>

          <Grid.Row md="3">
            <Grid.Col ><div className={classes.dummy}>auto</div></Grid.Col>
            <Grid.Col ><div className={classes.dummy}>auto</div></Grid.Col>
            <Grid.Col ><div className={classes.dummy}>auto</div></Grid.Col>

          </Grid.Row>

          <Grid.Row>
            <Grid.Col ><div className={classes.dummy}>1</div></Grid.Col>
            <Grid.Col ><div className={classes.dummy}>2</div></Grid.Col>
            <Grid.Col ><div className={classes.dummy}>3</div></Grid.Col>
            <Grid.Col ><div className={classes.dummy}>4</div></Grid.Col>
            <Grid.Col first_sm><div className={classes.dummy}>5</div></Grid.Col>

          </Grid.Row>

          <Grid.Row md="3" reverse>
            <Grid.Col ><div className={classes.dummy}>1</div></Grid.Col>
            <Grid.Col ><div className={classes.dummy}>2</div></Grid.Col>
            <Grid.Col ><div className={classes.dummy}>3</div></Grid.Col>

          </Grid.Row>

          <Grid.Row md="3" bottom_lg>
            <Grid.Col sm="4" md="4"><div className={`${classes.dummy} ${classes.high}`}>high</div></Grid.Col>
            <Grid.Col sm="4" md="4"><div className={classes.dummy}>2</div></Grid.Col>
            <Grid.Col sm="4" md="4"><div className={classes.dummy}>3</div></Grid.Col>

          </Grid.Row>

          <Grid.Row md="3" center_lg end_md start_xl>

            <Grid.Col sm="6"><div className={classes.dummy}>Senta</div></Grid.Col>


          </Grid.Row>

        </Grid>
      </Section>
      {/* {story.content.Body.map((blok) => (
        <DynamicComponent blok={blok} key={blok._uid} />
      ))} */}
      <Section color="" space="large">
        <BigBlock />
      </Section>
      {/* <HorizontalScroller /> */}
      <LargeImage />


    </Layout>
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