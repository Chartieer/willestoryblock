import React from 'react'
import { createUseStyles } from 'react-jss';


const useStyles = createUseStyles({
  footer: {
    height: '42vh',
    backgroundColor: '#fff',
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