/*
** original https://sudo.isl.co/translate-vertical-horizontal/
*/
import React, { useState, useEffect, useRef } from "react";
import { createUseStyles, useTheme } from 'react-jss';



const useStyles = createUseStyles({


  sticky: {
    position: 'sticky',
    top: '0',
    height: '80vh',
    width: '100%',
    overflowX: 'hidden'
  },


  card: {
    position: 'relative',
    height: '80%',
    width: '500px',
    backgroundColor: '#111f30',
    marginRight: '75px',
    flexShrink: '0'
  },

  cardscontainer: {
    position: 'relative',
    height: '100%',
    padding: '0 0 0 150px',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-center',
    alignItems: 'center',
  }
})


const useStyler = createUseStyles({
  wrapper: {
    backgroundColor: '#fff',
    height: props => props.dynamicHeight,
    position: 'relative',
    width: '100%'
  },

  scroller: {
    transform: props => `translateX(${props.translateX}px)`,
    position: 'absolute',
    height: '100%',
    willChange: 'transform',
  },
})



const TallOuterContainer = (props) => {


  const classes = useStyler(props);
  return (
    <div className={classes.wrapper}>{props.children}</div>
  )
};



const StickyInnerContainer = React.forwardRef((props, ref) => {
  const classes = useStyles()

  return (
    <div ref={ref} className={classes.sticky}>
      {props.children}
    </div>
  )
})

const HorizontalTranslateContainer = React.forwardRef((props, ref) => {
  const classes = useStyler(props)

  return (
    <div className={classes.scroller} ref={ref}>
      {props.children}
    </div>
  )
})




const SampleCard = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.card}>{props.children}</div>
  )
}

const CardsContainer = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.cardscontainer}>{props.children}</div>

  )
}

const SampleCards = React.memo(() =>
  Array(5)
    .fill(0)
    .map((_e, i) => <SampleCard key={`sampleCard-${i}`} />)
);



const calcDynamicHeight = objectWidth => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  return objectWidth - vw + vh + 150;
};

const handleDynamicHeight = (ref, setDynamicHeight) => {

  const objectWidth = ref.current.scrollWidth;
  const dynamicHeight = calcDynamicHeight(objectWidth);
  setDynamicHeight(dynamicHeight);
};

const applyScrollListener = (ref, setTranslateX) => {

  window.addEventListener("scroll", () => {
    const offsetTop = -ref.current.offsetTop;
    setTranslateX(offsetTop);
  });


};



const Main = ({ children }) => {
  const [dynamicHeight, setDynamicHeight] = useState(null);
  const [translateX, setTranslateX] = useState(0);

  const containerRef = useRef(null);
  const objectRef = useRef(null);

  const resizeHandler = () => {
    handleDynamicHeight(objectRef, setDynamicHeight);
  };

  useEffect(() => {
    handleDynamicHeight(objectRef, setDynamicHeight);
    window.addEventListener("resize", resizeHandler);
    applyScrollListener(containerRef, setTranslateX);

    return () => {
      console.log("UNNNNMOUT")
      window.removeEventListener("resize", resizeHandler)

    }
  }, []);

  return (
    <TallOuterContainer dynamicHeight={dynamicHeight}>
      <StickyInnerContainer ref={containerRef} >
        <HorizontalTranslateContainer translateX={translateX} ref={objectRef}>
          <CardsContainer>
            <SampleCards />
          </CardsContainer>
        </HorizontalTranslateContainer>
      </StickyInnerContainer>
    </TallOuterContainer>

  );
};

export default Main