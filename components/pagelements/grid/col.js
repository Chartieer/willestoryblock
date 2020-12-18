/**
 * JSSFlexboxGrid
 *
 * Copyright © fucking Corona 2020 Volker Chartier. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

// @todp
// OFFSET
// Start, Center, End, middle, bottom, arround, between, firs, last


import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import theme from '../../../styles/theme';
import Grid from '../../Grid';
import { styles } from '../Gridd';
import clsx from 'clsx';


const generateCol = (breakpoint, col) => {
  let columns = {}

  theme.grid.sizes.map((size) => {
    columns[`col_${breakpoint}_${size}`] = {

    }
  })

  return columns
}

const generateColBreak = (breakpoint) => {
  let columns = {}

  theme.grid.sizes.map((size) => {
    columns[`col_${breakpoint}_${size}`] = {
      maxWidth: `${Math.round((size / 12) * 10e7) / 10e5}%`,
      flexBasis: `${Math.round((size / 12) * 10e7) / 10e5}%`,
    }
  })

  return columns
}

const breakpoints = () => {
  let breakpoints = {

    // ...breakpointCol('sm', '400px', 'red'),
    // ...breakpointCol('md', '600px', 'red'),
    // ...breakpointCol('lg', '800px', 'green'),
    // ...breakpointCol('xl', '1000px', 'yellow'),
  }


  for (const [key, value] of Object.entries(theme.grid.breakpoints)) {

    breakpoints = Object.assign(breakpoints,
      {
        ...generateCol(key),

        [[`@media only screen and (min-width: ${value})`]]: {
          ...generateColBreak(key),
        },
      }
    )
  }


  return breakpoints;
};

const breakpointCol = (breakpoint, width, color) => {

  return {
    ...generateCol(breakpoint, color),


    [[`@media only screen and (min-width: ${width})`]]: {
      ...generateColBreak(breakpoint),
    },

  }

}

const useStyles = createUseStyles((theme) => (
  {
    col: {

      boxSizing: 'border-box',
      flex: '0 0 auto',
      flexBasis: '100%',
      width: '100%',
      paddingRight: theme.grid.gutter || "12px",
      paddingLeft: theme.grid.gutter || "12px",
      maxWidth: '100%'
    },

    reverse: {
      flexDirection: 'column-reverse'
    },

    ...breakpoints()


  }), { name: 'Grid' })







const Row = React.forwardRef(function Grid(props, ref) {

  const theme = useTheme();
  const styles = useStyles({ ...props, theme })

  //console.log("CLASSES", styles)

  const {
    children,
    sm = false,
    md = false,
    lg = false,
    xl = false
  } = props



  const classes = clsx(styles.col, {
    [styles[`col_sm_${sm}`]]: sm !== false,
    [styles[`col_md_${md}`]]: md !== false,
    [styles[`col_lg_${lg}`]]: lg !== false,
    [styles[`col_lg_${xl}`]]: xl !== false

  })


  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
}
)

export default Row; 