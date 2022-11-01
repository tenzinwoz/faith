import "./App.scss";
import MainLayout from "./components/layouts/MainLayout";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./containers/home/Home";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
