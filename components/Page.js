import DynamicComponent from './DynamicComponent';
import SbEditable from 'storyblok-react';
import { createUseStyles, useTheme } from 'react-jss';

/*
* JSS styles
**/

const useStyles = createUseStyles(theme => ({
  headline: {
    color: '#fff',
    fontSize: '3rem',
    background: theme.colorzwei
  },

  main: {
    border: "2px solid green"
  }

}))


const Page = (props) => {
  const theme = useTheme()
  const classes = useStyles(null, theme);
  const { content } = props;
  return (
    < SbEditable content={classes.main} >

      <main classes={classes.main}>
        {content.body.map((blok) => (
          <DynamicComponent blok={blok} key={blok._uid} />
        ))}
      </main>
      yo
    </ SbEditable>
  )
}

export default Page