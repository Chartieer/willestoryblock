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
    display: 'flex'
  },

  logo: {
    display: 'flex',
    flex: '1',
    position: 'relative',
    marginLeft: '2vw',

  },

  nav: {
    flex: '2',
    display: 'flex',
    '& ul': {
      height: '100%',
      listStyle: 'none',
    },

    '& a': {
      color: '#fff',
      textDecoration: 'none'
    }
  }
})


const Navigation = ({ language }) => {
  const classes = useStyles();

  return (
    <header className={classes.pageHeader}>
      <a href="/" className={classes.logo} >
        <Logo />
      </a >
      <nav className={classes.nav} role="navigation">
        <ul>
          <li>
            <a href="/referenzen">referenzen</a>
          </li>
        </ul>
      </nav>
    </header >
  )
}





export default Navigation