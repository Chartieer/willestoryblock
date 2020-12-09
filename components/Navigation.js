import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  pageHeader: {
    position: 'fixed',
    top: 0,
    right: 0,
    width: '100%',
    backgroundColor: 'pink',

    height: '50px',
  },

  header: {
    fontSize: 24,
    lineHeight: 1.25,
  },
})


const Navigation = ({ language }) => {
  const classes = useStyles();

  return (
    <header className={classes.pageHeader}>
    <nav className="" role="navigation">
      Wille
      
    </nav>
  </header>
  )
}





export default Navigation