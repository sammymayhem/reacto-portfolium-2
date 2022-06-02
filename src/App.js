import './App.css';
import { Footer } from './components/Footer';
import Header from './components/Header';
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { About } from './components/pages/About';
import Project from './components/pages/Project';
import { Contact } from './components/pages/Contact';
import { Resume } from './components/pages/Resume';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div>
          <Routes>
            <Route exact path="/" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;