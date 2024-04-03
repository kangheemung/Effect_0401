import React, { useEffect, useState } from 'react';

function DocumentTitleComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
}
