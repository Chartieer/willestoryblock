import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import useInView from "react-cool-inview";

import Logo from './Logo';


const useStyles = createUseStyles(theme => ({


  container: {
    overflow: 'hidden',
    userSelect: 'none',
    width: '100%'
  },

  aboutext: {
    color: '#fff',
    fontSize: '13.3vw',
    lineHeight: '.77',
    fontWeight: 600,
    letterSpacing: '-.065em',
    position: 'relative',
    transition: 'top 1.4s cubic-bezier(.215,.61,.55,.1123)',
    top: '500px',
    textTransform: 'uppercase',
    overflow: 'visible',
    margin: '0 0'

  },

  right: {
    textAlign: 'end'
  },

  inview: {
    top: 0
  },

  textwrapper: {
    overflow: 'hidden',
    padding: '0 1vw',


  },

  linkWrapper: {
    fontSize: '2.12rem',
    letterSpacing: '-.02em',


    '& a': {
      color: 'rgb(215,	47,	29)',
      textDecoration: 'none',

    }
  }

}))


const BigBlock = (props) => {



  const theme = useTheme()
  const classes = useStyles({ props, theme })

  const { ref, inView, scrollDirection, entry, observe, unobserve } = useInView(
    {
      threshold: 0.25, // Default is 0
      unobserveOnEnter: true,
      // onChange: ({ inView, scrollDirection, entry, observe, unobserve }) => {
      //   // Triggered whenever the target meets a threshold, e.g. [0.25, 0.5, ...]
      // },
      // onEnter: ({ scrollDirection, entry, observe, unobserve }) => {
      //   console.log("innnene")
      //   // Triggered when the target enters the viewport
      // },
      // onLeave: ({ scrollDirection, entry, observe, unobserve }) => {
      //   // Triggered when the target leaves the viewport
      // },
      // More useful options...
    }
  );


  return (

    <div className={classes.container} ref={ref}>
      <div className="about-description">
        <div className={classes.textwrapper}>
          <h1 className={`${classes.aboutext} ${classes.right} ${inView && classes.inview}`}>
            <span>
              <Logo />
            </span>
            <span>BODEN</span>
          </h1>
        </div>
        <div className={classes.textwrapper}>
          <h1 className={`${classes.aboutext} ${inView && classes.inview}`}>
            MANUFAKTUR
        </h1>
        </div>
        <div className={classes.textwrapper}>
          <h1 className={`${classes.aboutext} ${inView && classes.inview}`}> Experten
              <span className={classes.linkWrapper} style={{ left: '-140%', color: '#fff' }}>
              <a href="mailto:hello@klocko.com" target="_blank" rel="noopener" className="view-all-cta">
                contact
                </a>
            </span>
          </h1>
        </div>
      </div>
      <div className={classes.textwrapper}>

        <h1 className={`${classes.aboutext} ${classes.right} ${inView && classes.inview}`}>
          <span />Dortmund
          </h1>
      </div>
    </div>


  )
}

export default BigBlock