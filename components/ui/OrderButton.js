import React from 'react';
import SbEditable from "storyblok-react";

import { createUseStyles } from 'react-jss';
import clsx from 'clsx';
import useRipple from '../../hooks/useRipple';

//https://github.com/lalomts/flexgrid-js/blob/master/src/flexgrid.js

const useStyles = createUseStyles({

  orderbttn: {
    width: '100px',
    height: '100px',
    background: '#fff',
    position: 'absolute',
    borderRadius: '100%',
    right: '2%',
    bottom: 'calc(-48px)',
    zIndex: '2000',
    overflow: 'hidden'
  },

  tagline: {
    position: 'absolute',
    textAlign: 'right',
    left: '-100%',
    top: '60px',
    color: '#fff'

  }
});

const OrderButton = (props) => {
  const {
    children
  } = props

  const styles = useStyles()

  const classes = clsx(styles.section, {
    [styles.small]: props.small || null,
    [styles.upper]: props.uppercase || null


  })

  const [
    addRipple, // Attach this to any mouse event listener
    ripples // Render this to see the ripples
  ] = useRipple({
    // You can pass ripples` CSS here (no worries, it's optional)
    background: 'pink',
    animationDuration: '2s',
    opacity: '1'
  })

  return (

    <div className={styles.orderbttn} onMouseEnter={addRipple} >
      {ripples}
      <div className={styles.tagline}>{children}</div>
    </div >
  )

}

export default OrderButton