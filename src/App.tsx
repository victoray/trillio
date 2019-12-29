import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";

const App: React.FC = () => {
  return (
      <div className="container">
          <Header/>
          <Content/>
      </div>
  );
};

export default App;
