//import DynamicComponent from './DynamicComponent'
import SbEditable from 'storyblok-react';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';
import { useTheme } from 'react-jss';

const _Name = 'section';

const useStyles = createUseStyles((theme) => ({
  main: {
    display: 'flex'
  },


  spacing: (props) => ({

    padding: theme.section.spacing[props.space]
  }),


  background: (props) => ({
    background: theme.section.color[props.color]
  })


}
), { name: _Name })


const Section = (props) => {
  const { color, space, children, className } = props
  const theme = useTheme()
  const classes = useStyles({ ...props, theme })

  const section_classes = clsx(classes.main, {
    [classes.background]: props.color || null,
    [classes.spacing]: props.space || null,
    [props.className]: props.className != 'undefined'

  })



  return (
    <section className={section_classes}>
      {children}
    </section>
  )
}

Section.displayName = _Name

export default Section