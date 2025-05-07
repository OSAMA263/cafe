import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import FollowUs from "./components/FollowUs";
import Loader from "./components/Loader";

export default function App() {
  
  return (
    <div className="gap-between-elements">
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<Home />} path="/"></Route>
          <Route element={<About />} path="/about"></Route>
          <Route element={<Menu />} path="/menu"></Route>
          <Route element={<Contact />} path="/contact"></Route>
        </Routes>
      </Suspense>
      <FollowUs />
      <Footer />
    </div>
  );
}

const About = lazy(() => import("./pages/About"));
const Menu = lazy(() => import("./pages/Menu"));
const Contact = lazy(() => import("./pages/Contact"));