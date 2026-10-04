import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useEffect, useRef } from "react";
import style from '../carregamento/Carregamento.module.css'
gsap.registerPlugin(MotionPathPlugin);

export default function Carregamento() {

    const logoRef = useRef(null)

    useEffect(() => {
        const scale = [{scale: 1.2}, {scale: 0.8} , {scale: 1}]

        gsap.to('#logo' , {
            motionPath: {
                path: scale,
                curviness: 0
            },
            duration: 3,
            ease: "none",
            repeat: -1,
            repeatDelay: 1,

        });

    }, [])

    return (
        <>
            <div className={style.carregamento}>
                <img src="/logojr.png" alt="Logo Jr Dev" ref={logoRef} id='logo' className={style.logo} />
            </div>
        </>
    )
}