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



const useStyles = createUseStyles((theme) => (
  {

    container: {
      marginRight: 'auto',
      marginLeft: 'auto',
    },
    '@media only screen and (min-width: 48em)': {
      container: {
        // FIXME this needs is a problem with a layout with drawer
        // May be use 80%?
        width: '49rem',
      },
    },
    '@media only screen and (min-width: 64em)': {
      container: {
        // FIXME this needs is a problem with a layout with drawer
        // May be use 80%?
        width: '65rem',
      },
    },
    '@media only screen and (min-width: 75em)': {
      container: {
        // FIXME this needs is a problem with a layout with drawer
        // May be use 80%?
        width: '76rem',
      },
    },
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