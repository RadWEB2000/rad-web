import css from "v-home/Hero/Hero.module.scss"
import Link from "next/link";
import {tHero} from "v-home/Hero/Hero.models";

export default function Hero({buttons,callToAction,slogan,socials,title}:tHero){
    return(
        <div className={css.wrapper}>
            <header className={css.box}>
                <h1 
                    className={css.title}
                    dangerouslySetInnerHTML={{__html:title}}
                />
                <h2
                    className={css.slogan}
                    dangerouslySetInnerHTML={{__html:slogan}}
                />
                <p
                    className={css.callToAction}
                    dangerouslySetInnerHTML={{__html:callToAction}}
                />
                <ul className={css.buttons}>
                    {buttons.map(({label,uri},index) => {
                        return (
                            <Link className={css.button} href={uri} key={index}>
                                {label}
                            </Link>
                        )
                    })}
                </ul>
            </header>
            <ul className={css.socials}>
                {
                    socials.map(({label,url},index) => {
                        return(
                            <li className={css.social} key={index}>
                                <Link className={css.social__link} href={url}>
                                    {label}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}