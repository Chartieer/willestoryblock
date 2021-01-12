/*
  Takes an optional component ref (or returns a new one)
  and returns the ref, the scroll `start` and `end` percentages
  that are relative to the total document progress.
*/

import React, { useRef, useState, useLayoutEffect } from 'react';

export default function useAnimateInViewPort(inputRef) {

  const ref = inputRef || useRef();
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  useLayoutEffect(() => {
    if (!ref.current) {
      return;
    }

    const rect = ref.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const offsetTop = rect.top + scrollTop;

    setStart((offsetTop - window.innerHeight) / (document.body.clientHeight - window.innerHeight))
    setEnd(offsetTop / (document.body.clientHeight - window.innerHeight));

  });

  return { ref, start, end };
}
