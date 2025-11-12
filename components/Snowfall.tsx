
import React, { useMemo } from 'react';

const Snowfall: React.FC = () => {
  const snowflakeCount = 100;

  const snowflakes = useMemo(() => {
    return Array.from({ length: snowflakeCount }).map((_, index) => {
      const style = {
        left: `${Math.random() * 100}vw`,
        width: `${Math.random() * 2 + 1}px`,
        height: `${Math.random() * 2 + 1}px`,
        opacity: Math.random() * 0.7 + 0.3,
        animationDuration: `${Math.random() * 8 + 5}s`,
        animationDelay: `${Math.random() * 5}s`,
        zIndex: -1,
      };
      return <div key={index} className="snowflake" style={style} />;
    });
  }, []);

  return <>{snowflakes}</>;
};

export default Snowfall;