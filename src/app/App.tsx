import AppRouter from "./router/router";

import Footer from "@/widgets/Footer/footer";
import Header from "@/widgets/Header/Header";

const App = () => (
  <div className="app">
    <Header />
    <main>
      <AppRouter />
    </main>
    <Footer />
  </div>
);

export default App;
