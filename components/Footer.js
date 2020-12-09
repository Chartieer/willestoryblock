import React from 'react'
import { createUseStyles } from 'react-jss';


const useStyles = createUseStyles({
  footer: {
    height: '22vh',
    backgroundColor: '#220022',
  },


})

const Footer = () => {

  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      Footer
    </footer>
  )
}

export default Footer