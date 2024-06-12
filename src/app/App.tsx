import { useLocation } from "react-router";

import AppRouter from "./router/router";

import About from "@/widgets/About/about.tsx";
import Footer from "@/widgets/Footer/footer";
import Header from "@/widgets/Header/Header";

const App = () => {
  const location = useLocation();
  const currentLinks = ["/", "/main", "/admin", "/commands"];

  return (
    <div className="app">
      {currentLinks.includes(location.pathname) && <Header />}

      <main>
        <AppRouter />
        <About />
      </main>
      {currentLinks.includes(location.pathname) && <Footer />}
    </div>
  );
};

export default App;
