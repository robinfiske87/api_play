import { useState, useEffect, useRef } from 'react';

const customHooks = {

useWindowSize: function(){
  const isClient = typeof window === 'object'; //Object represents browser window
  const lastWidth = useRef();

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined
    }
  }

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    if (!isClient) { return false } //Exit if not user/browser

    function handleResize() {
        
      if (window?.innerWidth !== lastWidth.current) {
        const width = getSize();
        lastWidth.current = width;
        setWindowSize(width)
      }
    }
    window.addEventListener('resize', handleResize) // <-- I am only interested in window.innerWidth !
    return () => {
        window.removeEventListener('resize', handleResize)
    }
  }, []) // Empty array ensures that effect is only run on mount and unmount

  return windowSize
},
// custom Hook to make available interval polling in an easy to use way for functional react
useInterval: function(callback, delay) {

  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);


  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
},

// easy to use toggle-hook
useToggle(defaultValue) {
  const [value, setValue] = useState(defaultValue)

  function toggleValue(value) {
    setValue(currentValue => 
      typeof value === 'boolean' ? value : !currentValue
    )
  }
  return [value, toggleValue]
},


}

export default customHooks