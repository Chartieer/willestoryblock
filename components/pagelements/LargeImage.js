//import DynamicComponent from './DynamicComponent'
import SbEditable from 'storyblok-react'
import { createUseStyles } from 'react-jss'
import HeroImage from './PreviewImage';


const _Name = 'bigimag';

const useStyles = createUseStyles({
  container: {
    height: '65vh',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  img: {
    transform: 'translate3d(0,-172px,0)'
  }

}, { name: _Name })


const LargeImage = ({ content }) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <img className={classes.img} src="https://images.unsplash.com/photo-1604592795146-f82d2ea97b93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80" />
    </div>
  )
}

LargeImage.displayName = _Name

export default LargeImage