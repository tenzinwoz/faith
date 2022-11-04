import "./App.scss";
import MainLayout from "./components/layouts/MainLayout";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./containers/home/Home";
import About from "./containers/about/About";
import Dashboard from "./containers/dashboard/Dashboard";
import News from "./containers/news/News";
import Events from "./containers/events/Events";
import Donate from "./containers/donate/Donate";
import Contact from "./containers/contact/Contact";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/News" element={<News />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/donate" element={<Donate />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
