import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import InspectionList from './components/InspectionList';
import InspectionDetail from './components/InspectionDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inspections" element={<InspectionList />} />
            <Route path="/inspections/:id" element={<InspectionDetail />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
