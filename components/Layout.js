import Head from '../components/Head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import StoryblokService from '../utils/storyblok-service';
import { createUseStyles } from 'react-jss';


const useStyles = createUseStyles({
  page: {
    backgroundColor: '#212122'
  },



})


const Layout = ({ children }) => {
  const classes = useStyles();
  return (




    < div className={classes.page} >
      <Head />
      <Navigation />
      { children}
      <Footer />
      { StoryblokService.bridge()}
    </div >
  )
}

export default Layout