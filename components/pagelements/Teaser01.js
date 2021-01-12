import React from 'react';
import SbEditable from "storyblok-react";


import { createUseStyles } from 'react-jss';
import clsx from 'clsx';
import Grid from '../ui/layout/grid';
import OrderButton from '@ui/OrderButton';
import UnderlineLink from '@ui/UnderlineLink';

//https://github.com/lalomts/flexgrid-js/blob/master/src/flexgrid.js

const useStyles = createUseStyles({
  section: {
    padding: '15vh 0',
    overflowX: 'hidden'
  },

  right: {
    // height: '300px',
    position: 'relative',

  },

  wrap: {
    height: '500px',
    background: 'pink'
  },

  push: {


    position: 'absolute',
    overflow: 'hidden',
    top: 0,
    right: 0,
    bottom: 0,
    width: '100vw',
    left: '0',
    zIndex: '1',



  },

  h1: {
    textTransform: 'uppercase',
    color: '#fff',
    fontSize: 'calc(4.3rem + 5vw)',
    fontWeight: '600',
    lineHeight: '.9',
    marginBottom: '3rem'

  },

  p2: {
    fontSize: 'calc(0.76rem + .5vw)',
    lineHeight: '1.45',
    color: '#fff',
    marginTop: '3rem',
  },

  p: {
    fontSize: 'calc(1rem + .8vw)',
    lineHeight: '1.5',
    color: '#fff',
    fontWeight: '600',
    '&:before': {
      content: '""',
      height: '5px',
      width: '5px',
      background: 'pink',
      borderRadius: '7px',
      display: 'block',
      marginBottom: '2rem',


    }
  },

  overflow: {

    position: 'relative',
    zIndex: 2,
    overflowX: 'visible'
  },

  img: {
    width: '100%',
    height: 'auto'
  }
});

const Teaser01 = (props) => {
  const {
    small,
    children
  } = props

  const styles = useStyles()

  const classes = clsx(styles.section, {
    [styles.small]: props.small || null,
    [styles.upper]: props.uppercase || null


  })

  return (
    <section className={classes}>
      <Grid>
        <Grid.Row>
          <Grid.Col md="4">
            <div className={styles.overflow}>
              <UnderlineLink>Back to WHERE i came from</UnderlineLink>
              <h1 className={styles.h1}>Terazzo Estriche</h1>
              <p className={styles.p}>Eine Höhle. Nein, ein Kunstwerk aus Eis. Zeit, das Outfit zu wechseln.</p>
            </div>

          </Grid.Col>
          <Grid.Col sm="8" className={styles.right}>
            <div className={styles.wrap}>
              <OrderButton>Order now</OrderButton>
              <div className={styles.push}>

                <img className={styles.img} src="https://a.storyblok.com/f/99238/1076x720/7bee2852d7/wille-fussbodenbau-terrazzo-basic-12-1076x720.jpg" />
              </div>
            </div>
          </Grid.Col>

        </Grid.Row>
        <Grid.Row>
          <Grid.Col md="7">
            <p className={styles.p2}>Es gibt im Moment in diese Mannschaft, oh, einige Spieler vergessen ihnen Profi was sie sind. Ich lese nicht sehr viele Zeitungen, aber ich habe gehört viele Situationen. Erstens: wir haben nicht offensiv gespielt. Es gibt keine deutsche Mannschaft spielt offensiv und die Name offensiv wie Bayern. Letzte Spiel hatten wir in Platz drei Spitzen: Elber, Jancka und dann Zickler. Wir müssen nicht vergessen Zickler. Zickler ist eine Spitzen mehr, Mehmet eh mehr Basler. Ist klar diese Wörter, ist möglich verstehen, was ich hab gesagt? Danke.</p>
          </Grid.Col>
        </Grid.Row>
      </Grid>
    </section>
  )

}

export default Teaser01