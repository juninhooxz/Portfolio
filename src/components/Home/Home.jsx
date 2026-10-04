import style from "./Home.module.css";
import Minhalogo from "../MinhaLogo/Minhalogo";
import Titulo from "../Titulo/Titulo";
import Linguagens from "../Linguagens/Linguagens"
import Button from '../Button/Button'
import Projetos from "../Projetos/Projetos";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <>
      <main className={style.header}>
        <Minhalogo />
        <Titulo />
        <Linguagens />
        <Button title="Entre em contato" variant='btn' nomeBtn='nomeBtn' />
      </main>
      <Projetos />

      <Footer />
      
    </>
  );
}
