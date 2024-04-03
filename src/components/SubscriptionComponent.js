import React, { useEffect } from 'react';

function SubscriptionComponent() {
  useEffect(() => {
    const subscription = eventEmitter.on('event', handleEvent);

    return () => {
      // Cleanup subscription when component unmounts
      eventEmitter.off('event', handleEvent);
    };
  }, []);

  // Event handler function
  const handleEvent = () => {
    // Handle event logic
  };

  return <div>Subscription Component</div>;
}
