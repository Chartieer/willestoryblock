import React from 'react';
import SbEditable from "storyblok-react";

import { createUseStyles } from 'react-jss';
import clsx from 'clsx';


//https://github.com/lalomts/flexgrid-js/blob/master/src/flexgrid.js

const useStyles = createUseStyles({

  link: {
    fontSize: 'calc(0.5rem + 0.275vw)',
    fontWeight: '600',
    color: '#fff',
    textDecoration: 'none',
    position: 'relative',
    textTransform: 'uppercase',


    '&:after': {
      content: '""',
      position: 'absolute',
      height: '2px',
      width: '0',
      display: 'block',
      marginTop: '5px',
      right: 0,
      left: 0,
      background: '#fff',
      transition: 'width .2s ease',
    },

    '&:hover:after': {
      width: '100%'
    }



  },
});

const UnderlineLink = (props) => {
  const {
    children
  } = props

  const styles = useStyles()

  const classes = clsx(styles.section, {
    [styles.small]: props.small || null,
    [styles.upper]: props.uppercase || null


  })

  return (
    <a className={styles.link} href="#">{children}</a>
  )

}

export default UnderlineLink