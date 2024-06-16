import { BrowserRouter } from "react-router-dom";

import AppRouter from "./router/router";

import AuthProvider from "@/app/module/providers/AuthProvider.tsx";
import Footer from "@/widgets/Footer/footer";
import Header from "@/widgets/Header/Header";

const App = () => (
    <BrowserRouter>
      <AuthProvider>
        <div className="app">
          <Header />
          <main>
            <AppRouter />
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );

export default App;
