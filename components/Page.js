import DynamicComponent from './DynamicComponent'
import SbEditable from 'storyblok-react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  main: {
    backgroundColor: '#232322',
    border: "33px solid pink"
  },

  header: {
    fontSize: 24,
    lineHeight: 1.25,
  },
})



const Page = ({ content }) => {
  const classes = useStyles()
  return (
    < SbEditable content={classes.main} >
      <main classes={classes.main}>
        {content.body.map((blok) => (
          <DynamicComponent blok={blok} key={blok._uid} />
        ))}
      </main>
    </ SbEditable>
  )
}

export default Page