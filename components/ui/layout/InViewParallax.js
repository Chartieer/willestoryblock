//import DynamicComponent from './DynamicComponent'
import SbEditable from 'storyblok-react';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';
import { useTheme } from 'react-jss';

import color from 'color';

import React, { useLayoutEffect, useState } from 'react';


import {
  useViewportScroll,
  motion,
  useTransform,
} from 'framer-motion';


import useAnimateInViewPort from '@hooks/useAnimateInViewPort';
import Grid from '@ui/layout/grid';
import Section from './Section';


const _Name = 'parallax';

const useStyles = createUseStyles((theme) => ({
  box: {
    width: '100px',
    height: '100px',
    background: 'red'
  },

  red: {
    "& p": {
      color: color(theme.brand).darken(0.75).hex(),

      fontWeight: 400,
      lineHeight: 1.5,
      fontSize: 'calc(14px + (22 - 14) * ((100vw - 300px) / (1600 - 300)))'
      //  font-size: calc([minimum size] + ([maximum size] - [minimum size]) * ((100vw - [minimum viewport width]) / ([maximum viewport width] - [minimum viewport width])));
    }

  },

  h3_light: {
    color: theme.white,
    fontWeight: 200,
    fontSize: 'calc(24px + (32 - 24) * ((100vw - 300px) / (1000 - 300)))'

  },

}
), { name: _Name })


const Parallax = (props) => {

  const { scrollYProgress } = useViewportScroll();

  const { ref, start, end } = useAnimateInViewPort();


  const scale = useTransform(scrollYProgress, [start, end], [0.25, 2]);

  const y1 = useTransform(scrollYProgress, [start, end], [0
    , '-500']);










  const { color, space, children, className } = props
  const theme = useTheme()
  const classes = useStyles({ ...props, theme })

  const section_classes = clsx(classes.main, {
    [classes.background]: props.color || null,
    [classes.spacing]: props.space || null,
    [props.className]: props.className != 'undefined'

  })



  return (
    <motion.div
      initial={{ y: -500 }}
      style={{ y: y1 }} ref={ref}>
      <Section space="md" color="red" className={classes.red}>
        <Grid>
          <Grid.Row>
            <Grid.Col sm="8" md="8">
              <h3 className={classes.h3_light}>
                In diese Spiel es waren zwei, drei diese Spieler waren schwach wie eine Flasche leer!
      </h3>
            </Grid.Col>

            <Grid.Col sm="10" offset_sm="2">
              <p>
                Letzte Spiel hatten wir in Platz drei Spitzen: Elber, Jancka und dann Zickler. Wir müssen nicht vergessen Zickler. Zickler ist eine Spitzen mehr, Mehmet eh mehr Basler. Ist klar diese Wörter, ist möglich verstehen, was ich hab gesagt? Danke. Offensiv, offensiv ist wie machen wir in Platz. Zweitens: ich habe erklärt mit diese zwei Spieler: nach Dortmund brauchen vielleicht Halbzeit Pause. Ich habe auch andere Mannschaften gesehen in Europa nach diese Mittwoch. Ich habe gesehen auch zwei Tage die Training. Ein Trainer ist nicht ein Idiot! Ein Trainer sei sehen was passieren in Platz. In diese Spiel es waren zwei, drei diese Spieler waren schwach wie eine Flasche leer! Haben Sie gesehen Mittwoch, welche Mannschaft hat gespielt Mittwoch?
      </p>
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </Section>
    </motion.div >
  )
}

Parallax.displayName = _Name

export default Parallax