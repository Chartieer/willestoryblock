//import DynamicComponent from './DynamicComponent'
import SbEditable from 'storyblok-react';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';
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
  const { color, space, children } = props
  const theme = useTheme()
  const classes = useStyles({ ...props, theme })

  const section_classes = classNames(classes.main, {
    [classes.background]: props.color || null,
    [classes.spacing]: props.space || null

  })



  return (
    <section className={section_classes}>
      {children}
    </section>
  )
}

Section.displayName = _Name

export default Section