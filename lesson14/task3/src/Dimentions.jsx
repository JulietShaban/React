import React, { useState, useEffect } from "react";

const Dimentions = () => {
  const [dimention, setDimention] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    const { innerHeight, innerWidth } = window;
    setDimention({ width: innerWidth, height: innerHeight });
    const handleResize = (e) => {
      const { innerWidth, innerHeight } = e.target;
      setDimention({ width: innerWidth, height: innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { width, height } = dimention;
  return <div className="dimensions">{`${width}px - ${height}px`}</div>;
};

export default Dimentions;
