import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


const App = () => {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/Business" element={<News key="business" pageSize={5} country="in" category="business" />} />
          <Route path="/Entertainment" element={<News key="entertainment" pageSize={5} country="in" category="entertainment" />} />
          <Route path="/General" element={<News key="general" pageSize={5} country="in" category="general" />} />
          <Route path="/Health" element={<News key="health" pageSize={5} country="in" category="health" />} />
          <Route path="/Science" element={<News key="science" pageSize={5} country="in" category="science" />} />
          <Route path="/Sports" element={<News key="sports" pageSize={5} country="in" category="sports" />} />
          <Route path="/Technology" element={<News key="technology" pageSize={5} country="in" category="technology" />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App;