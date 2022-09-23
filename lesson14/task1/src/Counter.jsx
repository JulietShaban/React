import React, { useCallback, useState, useEffect, useMemo } from "react";

// class CounterClass extends React.Component {
//   state = {
//     counter: 0,
//     counter1: 1
//   };

//   render() {
//     return (
//       <div className="counter">
//         <button
//           className="counter_button"
//           onClick={() => this.setState({counter - 1)}
//         >
//           -
//         </button>
//         <span className="counter_value" onClick={() => setCounter(0)}>
//           {counter}
//         </span>
//         <button
//           className="counter_button"
//           onClick={() => setCounter(counter + 1)}
//         >
//           +
//         </button>
//       </div>
//     );
//   }
// }

const Counter = () => {
  const [counter, setCounter] = useState(1);

  const handleCounter = useCallback(() => {
    setCounter((prev) => prev + 1);
  }, []);

  const memoCount = useMemo(() => {
    return 1 * Math.random() * 100;
  }, []);

  const notMemoCount = 1 * Math.random() * 100;

  // useEffect(() => {
  //   if (counter) {
  //     alert(counter);
  //   }
  // }, [counter]);

  console.log("memoCount", memoCount);
  console.log("notMemoCount", notMemoCount);

  return (
    <div className="counter">
      <button className="counter_button" onClick={handleCounter}>
        -
      </button>
      <span className="counter_value" onClick={handleCounter}>
        {counter}
      </span>
      <button className="counter_button" onClick={handleCounter}>
        +
      </button>
    </div>
  );
};

export default Counter;
