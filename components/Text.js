import DynamicComponent from './DynamicComponent'
import SbEditable from 'storyblok-react'
import { createUseStyles, useTheme } from 'react-jss';
import { useState } from 'react';

/*
* JSS styles
**/

const useStyles = createUseStyles(theme => ({
  text: {
    color: '#fff',
    fontSize: '2rem',
    fontWeight: '200'
  },
}))

const Text = (props) => {
  const { blok } = props
  const theme = useTheme();
  const classes = useStyles(props, theme);
  return (
    < SbEditable content={blok} >
      <p className={classes.text}>
        {blok.text}
      </p>
    </SbEditable >
  )
}
export default Text