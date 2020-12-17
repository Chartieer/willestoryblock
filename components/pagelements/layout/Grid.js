import React from 'react';
import SbEditable from "storyblok-react";
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';


//https://github.com/lalomts/flexgrid-js/blob/master/src/flexgrid.js

const useStyles = createUseStyles({
  grid: {
    width: '100%',
    paddingRight: '2rem',
    paddingLeft: '2rem',
    maxWidth: '1200px',
    margin: '0 auto'
  },

  row: {
    boxSizing: 'border-box',
    display: 'flex',
    flexBasis: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: '0 1 auto',

  },


  col: {
    boxSizing: 'border-box',
    flex: '0 0 auto',
    flexBasis: '50%',
    maxWidth: '50%',

  }


}, { name: 'Grid' })

const Grid = (props) => {

  const classes = useStyles()

  return (<div className={classes.grid}>{props.children}</div>)

}


const Row = (props) => {
  const classes = useStyles()
  return (<div className={classes.row}>{props.children}</div>)

}


const Col = (props) => {

  const classes = useStyles()

  return (<div className={classes.col}>{props.children}</div>)

}

Grid.Row = Row;
Grid.Col = Col;


export default Grid