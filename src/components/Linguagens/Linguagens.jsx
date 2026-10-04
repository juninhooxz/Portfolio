import style from '../Linguagens/Linguagens.module.css'

export default function Linguagens(){
    return (
        <>
            <div className={style.containerLogos}>
                <div className={style.containerReact}>
                    <img src="/React.png" alt="Logo React" className={style.logoReact} />
                </div>
                <div className={style.containerTypescript}>
                    <img src="/TypeScript.png" alt="Logo Typescript" className={style.logoTypescript} />
                </div>
            </div>
        </>
    )
}