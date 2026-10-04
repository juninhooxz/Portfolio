import style from '../Projetos/Projetos.module.css'


export default function Projetos() {
    return (
        <>

        <section className={style.container}>
          <div className={style.cardProjeto}>
            <img className={style.imgProjeto} src="/carol.png" alt="" />
            <div className={style.tituloProjeto}>
              <h3>Carol Alves | Nail Designer</h3>
            </div>

            <div className={style.infoProjeto}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
          </div>

          <div className={style.cardProjetos}>
            <img className={style.imgProjeto} src="/medson.png" alt="" />
            <div className={style.tituloProjeto}>
              <h3>Medson Viegas | Personal Trainer</h3>
            </div>

            <div className={style.infoProjeto}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
          </div>

          <div className={style.cardProjeto2}>
              <img className={style.imgProjeto} src="/acai.png" alt="" />
              <div className={style.tituloProjeto}>
                <h3>Prime Acai | Acaiteria</h3>
              </div>

              <div className={style.infoProjeto}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div>
          </div>

          <div className={style.cardProjeto3}>
              <img className={style.imgProjeto} src="/acai.png" alt="" />
              <div className={style.tituloProjeto}>
                <h3>Prime Acai | Acaiteria</h3>
              </div>

              <div className={style.infoProjeto}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div>
          </div>
          
          <div className={style.cardProjeto4}>
              <img className={style.imgProjeto} src="/acai.png" alt="" />
              <div className={style.tituloProjeto}>
                <h3>Prime Acai | Acaiteria</h3>
              </div>

              <div className={style.infoProjeto}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div>
          </div>

        </section>
        </>
    )
}