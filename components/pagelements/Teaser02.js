import React from 'react';
import SbEditable from "storyblok-react";


import { createUseStyles } from 'react-jss';
import clsx from 'clsx';
import Grid from '@ui/layout/grid';


//https://github.com/lalomts/flexgrid-js/blob/master/src/flexgrid.js

const useStyles = createUseStyles({
  section: {
    padding: '25vh 0',
    overflowX: 'hidden',
  },



  lightbg: {
    paddingTop: '12vh',
    background: '#F0EEED'
  },



  right: {
    minHeight: '200px',
    position: 'relative',
    // overflow: 'visible'
  },

  wrap: {

    background: 'pink'
  },

  push: {


    position: 'absolute',

    top: 0,
    right: 0,
    bottom: '25%',
    width: '40vw',

  },

  img: {
    width: '100%',
    height: 'auto'
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
    fontSize: 'calc(0.6rem + .5vw)',
    lineHeight: '1.5',
    color: '#fff',
    marginTop: '1rem',
    color: '#21212',
  },

  p: {
    fontSize: 'calc(1rem + .25vw)',
    lineHeight: '1.5',
    color: '#fff',
    fontWeight: '500',
  },

  p3: {
    fontSize: 'calc(.75rem + .25vw)',
    lineHeight: '1.5',
    color: '#fff',
    fontWeight: '400',
  },



  imgfullW: {
    width: '100%',
    height: 'auto'
  }
});

const Teaser02 = (props) => {
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
          <Grid.Col md="5" >
            <div className="">
              <p className={styles.p}>
                Wille is a melting pott of people, companies and services with Boden in their DNA
              </p>
              <p className={styles.p3}>Bodenbekloppt, as we call it.</p>
            </div>

          </Grid.Col>
          <Grid.Col md="5" offset_md="2" className={styles.right}>

            <div className={styles.wrap}>
              <div className={styles.push}>
                <img className={styles.img} src="/bg03.webp" />
              </div>
            </div>
          </Grid.Col>

        </Grid.Row>

      </Grid>
      <div className={styles.lightbg}>
        <Grid>
          <Grid.Row>
            <Grid.Col md="5">
              <p className={styles.p2}>Extreme Temperaturen und die schlecht dokumentierte Region erschweren die Suche nach Kletterorten. Dann, endlich, die erste Herausforderung. Eine Höhle. Nein, ein Kunstwerk aus Eis. Zeit, das Outfit zu wechseln.</p>
            </Grid.Col>
          </Grid.Row>

          <Grid.Row>
            <Grid.Col md="5" className={styles.right}>

              <div className={styles.wrap}>
                <div className={styles.push}>
                  <img className={styles.img} src="/bg03.webp" />
                </div>
              </div>
            </Grid.Col>

            <Grid.Col md="4" offset_md="2">
              <p className={styles.p2}>
                In diese Spiel es waren zwei, drei diese Spieler waren schwach wie eine Flasche leer! Haben Sie gesehen Mittwoch, welche Mannschaft hat gespielt Mittwoch? Hat gespielt Mehmet oder gespielt Basler oder hat gespielt Trapattoni?
            </p>
            </Grid.Col>

          </Grid.Row>


        </Grid>

        <div>
          <img className={styles.imgfullW} src="/full.webp" />
        </div>

      </div>
    </section>
  )

}

export default Teaser02