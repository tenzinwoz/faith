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
import SinglePageNews from "./containers/singlePageNews/SinglePageNews";
import SinglePageEvent from "./containers/singlePageEvents/SinglePageEvent";
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import NotFound from "./containers/404/NotFound";

function App() {
  return (
    <Router basename="/faith">
      <MainLayout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/news" element={<News />} />
          <Route exact path="/news/:id" element={<SinglePageNews />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/events/:id" element={<SinglePageEvent />} />
          <Route exact path="/donate" element={<Donate />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
