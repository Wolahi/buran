import AppRouter from "./router/router";

import About from "@/widgets/About/about.tsx";
import Footer from "@/widgets/Footer/footer";
import Header from "@/widgets/Header/Header";

const App = () => (
  <div className="app">
    <Header />
    <main>
      <AppRouter />
      <About />
    </main>
    <Footer />
  </div>
);

export default App;
