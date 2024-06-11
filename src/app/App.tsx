import AppRouter from "./router/router";

import Footer from "@/widgets/Footer/footer";

const App = () => (
  <div className="app">
    <main>
      <AppRouter />
    </main>
    <Footer />
  </div>
);

export default App;
