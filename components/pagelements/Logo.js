//import DynamicComponent from './DynamicComponent'
import SbEditable from 'storyblok-react'
import { createUseStyles, useTheme } from 'react-jss'

const _Name = 'logo';

const useStyles = createUseStyles(theme => ({
  wille: (props) => ({
    fill: props.color ?? theme.dark,
    fillRule: 'nonzero',
    width: '23px'
  }),


  dot: {
    fill: theme.brand,
    fillRule: 'nonzero'

  },

}), { name: _Name })





const Logo = (props) => {


  const theme = useTheme()
  const styles = useStyles({ ...props, theme })


  return (
    <svg width="79px" height="100%" viewBox="0 0 497 189">
      <g transform="matrix(1,0,0,1,-7514.56,-6758.97)">
        <g transform="matrix(0.421706,0,0,0.393335,5836.17,6699.39)">
          <g transform="matrix(2.15419,0,0,25.6489,1793.6,-92808.7)">
            <g transform="matrix(2.55938,0,0,0.232331,-2243.37,3270.1)" className={styles.wille}>
              <g transform="matrix(1,0,0,1,-3,0)">
                <path d="M1292.18,1605.2L1306.35,1605.2L1315.62,1574.73L1325.31,1605.2L1339.48,1605.2L1355.57,1550.65L1340.06,1550.65L1331.17,1581.44L1322.33,1550.65L1309.33,1550.65L1300.54,1581.62L1291.61,1550.65L1276.09,1550.65L1292.18,1605.2Z" />
              </g>
              <g transform="matrix(1,0,0,1,-7,0)">
                <path d="M1370.67,1550.65L1362.57,1550.65L1355.86,1574.64L1355.86,1605.2L1370.67,1605.2L1370.67,1550.65Z" />
              </g>
              <g transform="matrix(1,0,0,1,-6.01483,0)">
                <path d="M1373.2,1605.2L1410.06,1605.2L1410.06,1593.27L1388.01,1593.27L1388.01,1550.65L1373.2,1550.65L1373.2,1605.2Z" />
              </g>
              <g transform="matrix(1,0,0,1,-4.2464,0)">
                <path d="M1411.53,1605.2L1448.39,1605.2L1448.39,1593.27L1426.34,1593.27L1426.34,1550.65L1411.53,1550.65L1411.53,1605.2Z" />
              </g>
              <g transform="matrix(1,0,0,1,-2.45422,0)">
                <path d="M1449.86,1605.2L1489.06,1605.2L1489.06,1593.27L1464.66,1593.27L1464.66,1583.89L1487.14,1583.89L1487.14,1571.96L1464.66,1571.96L1464.66,1562.59L1489.17,1562.59L1489.17,1550.65L1449.86,1550.65L1449.86,1605.2Z" />
              </g>
            </g>
            <g transform="matrix(5.81343,0,0,0.527722,-1725.53,3206.84)" className={styles.dot}>
              <path d="M503.795,794.952C503.795,792.841 505.506,791.13 507.617,791.13C509.729,791.13 511.44,792.841 511.44,794.952C511.44,797.063 509.729,798.774 507.617,798.774C505.506,798.774 503.795,797.063 503.795,794.952" />
            </g>
          </g>
        </g>
      </g>
    </svg >
  )
}

Logo.displayName = _Name;
export default Logo