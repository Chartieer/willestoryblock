/**
 * react-flexbox-grid-jss
 *
 * Copyright © 2021 chartier, Pol Guixe. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import theme from '@styles/theme';


const breakpoints = () => {
  let breakpoints = {}


  for (const [key, value] of Object.entries(theme.grid.breakpoints)) {

    breakpoints = Object.assign(breakpoints,
      {


        [[`@media only screen and (min-width: ${value})`]]: {
          container: {
            width: `${theme.grid.container[key]}`
          }
        },
      }
    )
  }


  return breakpoints;
};

const useStyles = createUseStyles((theme) => (
  {

    container: {
      marginRight: 'auto',
      marginLeft: 'auto',
    },

    fluid: {
      paddingLeft: theme.grid.outerMargin,
      paddingRight: theme.grid.outerMargin,
    },

    ...breakpoints()
  }
), { name: 'Grid' })







const Container = React.forwardRef(function Grid(props, ref) {

  const {
    children
  } = props

  const theme = useTheme();
  const classes = useStyles({ ...props, theme })


  return (
    <div ref={ref} className={classes.container}>
      {children}
    </div>
  );
}, { name: 'container' })

export default Container; 