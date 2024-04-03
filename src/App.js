import React from 'react';
import Component from './components/Component';
import Dependencies from './components/Dependencies';
import DocumentTitleComponent from'./components/DocumentTitleComponent';
import DataFetchingComponent from './components/DataFetchingComponent';

const MyContext = React.createContext();

function ParentComponent() {
  const value = "Hello from Context!";
  return (
    <MyContext.Provider value={value}>
      <ChildComponent />
      <DocumentTitleComponent />
      <DataFetchingComponent />
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
