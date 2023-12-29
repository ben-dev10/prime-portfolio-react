import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header className="p-4 sticky top-0 border-b bg-background/80 backdrop-blur-[8px] z-[999]">
        <Header />
      </header>

      <main className="">
        <Outlet></Outlet>
      </main>

      <footer className="mt-10">
        <Footer />
      </footer>
    </>
  );
}

export default App;
