/**
 * react-flexbox-grid-jss
 *
 * Copyright © 2017 Zetoff, Pol Guixe. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import clsx from 'clsx';



const generateFlexAlign = (breakpoint, empty) => {
  let row = {}


  row[`start-${breakpoint}`] = !empty ? {

    justifyContent: 'flex-start',
    textAlign: 'start'

  } : {};

  row[`center-${breakpoint}`] = !empty ? {
    justifyContent: 'center',
    textAlign: 'center'
  } : {};

  row[`end-${breakpoint}`] = !empty ? {
    justifyContent: 'flex-end',
    textAlign: 'end'
  } : {};

  row[`top-${breakpoint}`] = !empty ? {
    alignItems: 'flex-start'
  } : {};

  row[`middle-${breakpoint}`] = !empty ? {
    alignItems: 'center'
  } : {};

  row[`bottom-${breakpoint}`] = !empty ? {
    alignItems: 'flex-end'
  } : {};

  row[`around-${breakpoint}`] = !empty ? {
    justifyContent: 'space-around'
  } : {};

  row[`between-${breakpoint}`] = !empty ? {
    justifyContent: 'space-between'
  } : {};

  return row
}


const breakpoints = (theme) => {
  let breakpoints = {}

  for (const [key, value] of Object.entries(theme.grid.breakpoints)) {

    breakpoints = Object.assign(breakpoints,
      {
        ...generateFlexAlign(key, true),

        [[`@media only screen and (min-width: ${value})`]]: {
          ...generateFlexAlign(key, false),
        },
      }
    )
  }
  return breakpoints;
};



const useStyles = createUseStyles((theme) => (
  {

    row: {
      boxSizing: 'border-box',
      display: 'flex',
      flex: '0 1 auto',
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginRight: theme.grid.gutter,
      marginLeft: theme.grid.gutter
    },

    reverse: {
      flexDirection: 'row-reverse'

    },

    ...breakpoints(theme)
  }), { name: 'Grid' })







const Row = React.forwardRef(function Grid(props, ref) {

  const {
    children,

    center_sm = false,
    center_md = false,
    center_lg = false,
    center_xl = false,

    end_sm = false,
    end_md = false,
    end_lg = false,
    end_xl = false,

    start_sm = false,
    start_md = false,
    start_lg = false,
    start_xl = false,

    between_sm = false,
    between_md = false,
    between_lg = false,
    between_xl = false,


    around_sm = false,
    around_md = false,
    around_lg = false,
    around_xl = false,

    top_sm = false,
    top_md = false,
    top_lg = false,
    top_xl = false,

    middle_sm = false,
    middle_md = false,
    middle_lg = false,
    middle_xl = false,

    bottom_sm = false,
    bottom_md = false,
    bottom_lg = false,
    bottom_xl = false,

    reverse = false,
  } = props

  const theme = useTheme();
  const styles = useStyles({ ...props, theme })


  const classes = clsx(styles.row, {
    [styles.reverse]: reverse !== false,

    [styles[`top-sm`]]: top_sm !== false,
    [styles[`top-md`]]: top_md !== false,
    [styles[`top-lg`]]: top_lg !== false,
    [styles[`top-xl`]]: top_xl !== false,

    [styles[`end-sm`]]: end_sm !== false,
    [styles[`end-md`]]: end_md !== false,
    [styles[`end-lg`]]: end_lg !== false,
    [styles[`end-xl`]]: end_xl !== false,

    [styles[`center-sm`]]: center_sm !== false,
    [styles[`center-md`]]: center_md !== false,
    [styles[`center-lg`]]: center_lg !== false,
    [styles[`center-xl`]]: center_xl !== false,

    [styles[`start-sm`]]: start_sm !== false,
    [styles[`start-md`]]: start_md !== false,
    [styles[`start-lg`]]: start_lg !== false,
    [styles[`start-xl`]]: start_xl !== false,

    [styles[`middle-sm`]]: middle_sm !== false,
    [styles[`middle-md`]]: middle_md !== false,
    [styles[`middle-lg`]]: middle_lg !== false,
    [styles[`middle-xl`]]: middle_xl !== false,

    [styles[`bottom-sm`]]: bottom_sm !== false,
    [styles[`bottom-md`]]: bottom_md !== false,
    [styles[`bottom-lg`]]: bottom_lg !== false,
    [styles[`bottom-xl`]]: bottom_xl !== false,

    [styles[`between-sm`]]: between_sm !== false,
    [styles[`between-md`]]: between_md !== false,
    [styles[`between-lg`]]: between_lg !== false,
    [styles[`between-xl`]]: between_xl !== false,

    [styles[`around-sm`]]: around_sm !== false,
    [styles[`around-md`]]: around_md !== false,
    [styles[`around-lg`]]: around_lg !== false,
    [styles[`around-xl`]]: around_xl !== false,

  })


  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
}
)

export default Row; 