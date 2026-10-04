import style from "../Footer/Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={style.containerFooter}>
        <div className={style.footerDiv}>
          <p className={style.copy}>
            © 2026 Desenvolvido por{" "}
            <a href="https://www.linkedin.com/in/alexandre-alves-7b2047279/" target="_blank">
              <span className={style.nomeDev}>Alexandre Alves</span>
            </a> | Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
