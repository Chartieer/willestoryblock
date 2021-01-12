import Grid from '@ui/layout/grid';
import React from 'react'
import { createUseStyles } from 'react-jss';
import Logo from './pagelements/Logo';


const useStyles = createUseStyles({
  footer: {
    minHeight: '20vh',
    paddingTop: "6vh",
    backgroundColor: '#fff',
  },


})

const Footer = () => {

  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <Grid>
        <Grid.Row>
          <Grid.Col sm="4">
            <Logo color="#f0f" />
          </Grid.Col>

          <Grid.Col sm="4">
            <nav>
              <ul>
                <li>About</li>
                <li>About</li>
                <li>About</li>
              </ul>
            </nav>
          </Grid.Col>

          <Grid.Col sm="4">
            <nav>
              <ul>
                <li>About</li>
                <li>About</li>
                <li>About</li>
              </ul>
            </nav>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col sm="4">
            @1999-2021
          </Grid.Col>
          <Grid.Col sm="4">
            Impressum + Cookie Shit
          </Grid.Col>
        </Grid.Row>
      </Grid>
    </footer >
  )
}

export default Footer