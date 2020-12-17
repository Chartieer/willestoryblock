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

    row: {
      boxSizing: 'border-box',
      display: 'flex',
      flex: '0 1 auto',
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginRight: theme.grid.gutter,
      marginLeft: theme.grid.gutter
    }
  }
), { name: 'Grid' })







const Row = React.forwardRef(function Grid(props, ref) {

  const {
    children
  } = props

  const theme = useTheme();
  const classes = useStyles({ ...props, theme })


  return (
    <div ref={ref} className={classes.row}>
      {children}
    </div>
  );
}
)

export default Row; 