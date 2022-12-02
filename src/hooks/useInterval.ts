import React, { useState, useEffect, useRef } from "react";

//@ts-ignore
export default function useInterval(callback, delay, once) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    //@ts-ignore
    let id;
    function tick() {
      //@ts-ignore
      savedCallback.current();
      //@ts-ignore
      if (once) clearInterval(id);
    }
    if (delay !== null) {
      id = setInterval(tick, delay);
      //@ts-ignore
      return () => clearInterval(id);
    }
  }, [delay]);
}
