/**
 * JSSFlexboxGrid
 *
 * Copyright © fucking Corona 2020 Volker Chartier. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

// @todos
// OFFSET
// Start, Center, End, middle, bottom, arround, between, firs, last


import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import theme from '@styles/theme';
import clsx from 'clsx';


const generateCol = (breakpoint, col) => {
  let columns = {}

  theme.grid.sizes.map((size) => {
    columns[`col-${breakpoint}-offset-${size}`] = {};
    columns[`first-${breakpoint}`] = {};
    columns[`last-${breakpoint}`] = {};

    columns[`col-${breakpoint}-${size}`] = {
      flexGrow: 1
    };


  })

  return columns
}




const generateColBreak = (breakpoint) => {
  let columns = {}

  theme.grid.sizes.map((size) => {

    let percent = `${Math.round((size / 12) * 10e7) / 10e5}%`;

    columns[`col-${breakpoint}-${size}`] = {
      maxWidth: percent,
      flexBasis: percent,
    };

    columns[`col-${breakpoint}-offset-${size}`] = {
      marginLeft: percent
    };

    columns[`first-${breakpoint}`] = {
      order: '-1'
    };

    columns[`last-${breakpoint}`] = {
      order: '1'
    };

  })

  return columns
}

const breakpoints = () => {
  let breakpoints = {}

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


const useStyles = createUseStyles((theme) => (
  {
    col: {
      boxSizing: 'border-box',
      flex: '0 0 auto',
      flexGrow: 1,
      paddingRight: theme.grid.columngutter,
      paddingLeft: theme.grid.columngutter,
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
    xl = false,

    offset_sm = false,
    offset_md = false,
    offset_lg = false,
    offset_xl = false,

    first_sm = false,
    first_md = false,
    first_lg = false,
    first_xl = false,

  } = props



  const classes = clsx(styles.col, {
    [styles[`col-sm-${sm}`]]: sm !== false,
    [styles[`col-md-${md}`]]: md !== false,
    [styles[`col-lg-${lg}`]]: lg !== false,
    [styles[`col-xl-${xl}`]]: xl !== false,

    [styles[`first-sm`]]: first_sm !== false,
    [styles[`first-md`]]: first_md !== false,
    [styles[`first-lg`]]: first_lg !== false,
    [styles[`first-xl`]]: first_xl !== false,

    [styles[`col-sm-offset-${offset_sm}`]]: offset_sm !== false,
    [styles[`col-md-offset-${offset_md}`]]: offset_md !== false,
    [styles[`col-lg-offset-${offset_lg}`]]: offset_lg !== false,
    [styles[`col-xl-offset-${offset_xl}`]]: offset_xl !== false,

    [props.className]: props.className !== undefined
  })

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
}
)

export default Row; 