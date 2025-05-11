import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import FollowUs from "./components/FollowUs";
import Loader from "./components/Loader";

export default function App() {
  return (
    <>
      <Routes>
        <Route
          element={
            <div className="gap-between-elements">
              <Header />
              <Suspense fallback={<Loader route />}>
                <Routes>
                  <Route element={<Home />} path="/" />
                  <Route element={<About />} path="/about" />
                  <Route element={<Menu />} path="/menu" />
                  <Route element={<Contact />} path="/contact" />
                </Routes>
              </Suspense>
              <FollowUs />
              <Footer />
            </div>
          }
          path="/*"
        />
        <Route
          element={
            <Suspense fallback={<Loader route />}>
              <Dashboard />
            </Suspense>
          }
          path="/dashboard"
        />
      </Routes>
    </>
  );
}

const About = lazy(() => import("./pages/About"));
const Menu = lazy(() => import("./pages/Menu"));
const Contact = lazy(() => import("./pages/Contact"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
