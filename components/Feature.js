import SbEditable from 'storyblok-react';
import { createUseStyles } from 'react-jss';


const useStyles = createUseStyles({
  container: {
    border: '2px solid green'
  },

  header: {
    fontSize: 24,
    lineHeight: 1.25,
  },
})



const Feature = ({ blok }) => {
  const classes = useStyles()

  return (
    <SbEditable content={blok}>
      <div className={classes.container}>
        <h2 className={classes.header}>{blok.name}</h2>
      </div>
    </SbEditable>
  )
}

export default Feature