import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useEffect, useState } from "react";
gsap.registerPlugin(SplitText);
import Carregamento from "./pages/carregamento/Carregamento";
import Home from "./components/Home/Home";

function App() {
  const [page, setPage] = useState("carregando");

  useEffect(() => {
    setTimeout(() => {
      setPage("home");
    }, 3000);
  }, []);

  return (
    <>
      {page === "carregando" && <Carregamento />}
      {page === "home" && <Home />}
    </>
  );
}

export default App;
