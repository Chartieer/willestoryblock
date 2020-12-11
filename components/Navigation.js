import React from 'react'
import { createUseStyles } from 'react-jss';
import Logo from '../components/pagelements/Logo';
const useStyles = createUseStyles({
  pageHeader: {
    position: 'fixed',
    top: 0,
    right: 0,
    width: '100%',
    // backgroundColor: 'red',
    zIndex: 2222,
    height: '120px',
  },

  logo: {
    position: 'relative',
    display: 'inline-block',

    marginLeft: '2vw',
    top: '33px',
  }
})


const Navigation = ({ language }) => {
  const classes = useStyles();

  return (
    <header className={classes.pageHeader}>
      <a href="/" className={classes.logo} >
        <Logo />
      </a >
      <nav className="" role="navigation">
        <a href="/referenzen">referenzen</a>
      </nav>
    </header >
  )
}





export default Navigation