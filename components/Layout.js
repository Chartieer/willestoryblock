import Head from '../components/Head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import StoryblokService from '../utils/storyblok-service';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  page: {
    backgroundColor: theme.dunkelGrau
  },



}))


const Layout = ({ children, ...props }) => {

  let { template } = props;

  const theme = useTheme()
  const classes = useStyles({}, theme);


  return (

    <div className={classes.page} >
      <Head template />
      <Navigation template />
      <main>{children}</main>
      <Footer />
      { StoryblokService.bridge()}
    </div >
  )
}

export default Layout