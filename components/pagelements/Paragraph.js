import React from 'react';
import SbEditable from "storyblok-react";
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';


//https://github.com/lalomts/flexgrid-js/blob/master/src/flexgrid.js

const useStyles = createUseStyles({
  paragraph: {
    color: '#fff',
    fontSize: '1.8vw',
    lineHeight: '1.25',
    fontWeight: '200',

  },

  upper: {
    textTransform: 'uppercase',
    fontSize: '1vw',
    opacity: '0.25',
    fontWeight: '500'
  },
  small: {
    fontSize: '1.2vw',
    lineHeight: '1.5',
  }
});

const Paragraph = (props) => {
  const {
    small,
    children
  } = props

  const styles = useStyles()

  const classes = classNames(styles.paragraph, {
    [styles.small]: props.small || null,
    [styles.upper]: props.uppercase || null


  })

  return (
    <p className={classes}>
      { children}
    </p>
  )

}

export default Paragraph