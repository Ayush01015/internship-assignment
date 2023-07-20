import { useState, useEffect } from "react";

import "./ProgressBar.css";

const ProgressBar = () => {
  const [counter, setCounter] = useState(0);
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [width, setWidth] = useState(60);
  const [height, setHeight] = useState(60);

  const isMediumScreen = window.matchMedia("(min-width:  1000px").matches;

  let cx = 30;
  let cy = 30;
  let r = 25;

  useEffect(()=>{
    if (isMediumScreen) {
        cx = 55;
        cy = 55;
        r = 60;
        setWidth(110);
        setHeight(110);
      }
  },[isMediumScreen])


//   console.log(isMediumScreen);
//   console.log(width,height)

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter === 78) {
        clearInterval(interval);
      } else {
        setCounter((prevCounter) => prevCounter + 1);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [counter]);

  useEffect(() => {
    const interval1 = setInterval(() => {
      if (counter1 === 95) {
        clearInterval(interval1);
      } else {
        setCounter1((prevCounter) => prevCounter + 1);
      }
    }, 20);

    return () => clearInterval(interval1);
  }, [counter1]);

  useEffect(() => {
    const interval2 = setInterval(() => {
      if (counter2 === 59) {
        clearInterval(interval2);
      } else {
        setCounter2((prevCounter) => prevCounter + 1);
      }
    }, 20);

    return () => clearInterval(interval2);
  }, [counter2]);

  return (
    <>
      <div className="rings">
        <div className="ring">
          <div className="outer">
            <div className="inner">
              <div id="number">{counter}%</div>
            </div>
          </div>

          <svg
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            id="svg"
          >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stop-color="#EFF54D" />
                <stop offset="100%" stop-color="#00AC61" />
              </linearGradient>
            </defs>
            <circle cx={cx} cy={cy} r={r} strokeLinecap="round" />
          </svg>
        </div>
        <div className="ring">
          <div className="outer">
            <div className="inner">
              <div id="number">{counter1}%</div>
            </div>
          </div>

          <svg
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            id="svg"
          >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stop-color="#EFF54D" />
                <stop offset="100%" stop-color="#00AC61" />
              </linearGradient>
            </defs>
            <circle cx={cx} cy={cy} r={r} strokeLinecap="round" />
          </svg>
        </div>
        <div className="ring">
          <div className="outer">
            <div className="inner">
              <div id="number">{counter2}%</div>
            </div>
          </div>

          <svg
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            id="svg"
          >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stop-color="#EFF54D" />
                <stop offset="100%" stop-color="#00AC61" />
              </linearGradient>
            </defs>
            <circle cx={cx} cy={cy} r={r} strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
