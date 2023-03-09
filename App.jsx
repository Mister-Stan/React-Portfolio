import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Homepage from "./pages/Homepage.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";



function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
