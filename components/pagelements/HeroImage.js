//import DynamicComponent from './DynamicComponent'
import SbEditable from 'storyblok-react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  hero: {
    height: '90vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingTop: '150px',

  },
})



const HeroImage = ({ content }) => {
  const classes = useStyles()

  return (
    <div className={classes.hero} style={{ backgroundImage: `url(${content.headimage.filename})` }}>
      <h1>{content.name}</h1>
    </div>
  )
}

export default HeroImage