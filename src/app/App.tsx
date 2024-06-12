import { useLocation } from "react-router";

import AppRouter from "./router/router";

import Footer from "@/widgets/Footer/footer";
import Header from "@/widgets/Header/Header";

const App = () => {
  const location = useLocation();
  const currentLinks = ["/", "/index", "/admin", "/commands"];

  return (
    <div className="app">
      {currentLinks.includes(location.pathname) && <Header />}
      <main>
        <AppRouter />
      </main>
      {currentLinks.includes(location.pathname) && <Footer />}
    </div>
  );
};

export default App;
