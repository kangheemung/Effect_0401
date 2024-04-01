import React from 'react';
import Component from './components/Component';
import Dependencies from './components/Dependencies';

const MyContext = React.createContext();

function ParentComponent() {
  const value = "Hello from Context!";
  return (
    <MyContext.Provider value={value}>
      <ChildComponent />
    </MyContext.Provider>
  );
}

function ChildComponent() {
  const value = React.useContext(MyContext);
  return <div>{value}</div>;
}

function App() {
  return (
    <>
      <Dependencies />
      <Component />
    </>
  );
}

export default App;
