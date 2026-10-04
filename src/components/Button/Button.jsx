import style from '../Button/Button.module.css';

export default function Button({variant, title, nomeBtn}) {
    return (
        <>
            <a href="https://api.whatsapp.com/send?phone=5581997173244&text=Ol%c3%a1,%20gostaria%20de%20solicitar%20um%20or%c3%a7amento&fbclid=PAZXh0bgNhZW0CMTEAcGRvZgJzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAad3uvy3hHwTmWp54t30YwZA3Xpr3O7RYGCnrD9aSnwq5ripxKYYNNrlpYk1lQ_aem_oa1VDeyRJB3w9qxqQVQSyw" className={style[variant]} target='_blank'><p className={style[nomeBtn]}>{title}</p></a>
        </>
    )
}