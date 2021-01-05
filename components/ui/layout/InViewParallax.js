//import DynamicComponent from './DynamicComponent'
import SbEditable from 'storyblok-react';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';
import { useTheme } from 'react-jss';
import React, { useLayoutEffect, useState, useRef } from 'react';


import { useInView } from 'react-intersection-observer';
import {
  useViewportScroll,
  motion,
  useTransform,
} from 'framer-motion';


const _Name = 'parallax';

const useStyles = createUseStyles((theme) => ({
  box: {
    width: '100px',
    height: '100px',
    background: 'red'
  },

  green: {
    background: 'green'
  }
}
), { name: _Name })


const Parallax = (props) => {

  const { scrollY, scrollYProgress } = useViewportScroll();



  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  const scale = useTransform(scrollYProgress, [start, end], [0.25, 2]);

  const y1 = useTransform(scrollYProgress, [start, end], [0.25, -332]);
  const ref = useRef();


  //574



  useLayoutEffect(() => {
    if (!ref.current) {
      return;
    }


    const rect = ref.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const offsetTop = rect.top + scrollTop;

    setStart((offsetTop - window.innerHeight) / (document.body.clientHeight - window.innerHeight))
    setEnd(offsetTop / (document.body.clientHeight - window.innerHeight));

  });






  const { color, space, children, className } = props
  const theme = useTheme()
  const classes = useStyles({ ...props, theme })

  const section_classes = clsx(classes.main, {
    [classes.background]: props.color || null,
    [classes.spacing]: props.space || null,
    [props.className]: props.className != 'undefined'

  })



  return (
    <section className={section_classes} ref={ref}>

      <motion.div
        className={classes.box}
        style={{ scale, x: 100, y: y1 }}
      />
      <motion.div
        className={classes.box}
        style={{ scale, x: 400 }}
      />
    </section>
  )
}

Parallax.displayName = _Name

export default Parallax