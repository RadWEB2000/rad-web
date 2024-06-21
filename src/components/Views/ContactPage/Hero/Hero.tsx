import {tHero} from "v-contact/Hero/Hero.models";
import css from "v-contact/Hero/Hero.module.scss"

export default function Hero({title,slogan}:tHero){
    return (
        <header
            className={css.wrapper}
        >
            <h1
                className={css.title}
                dangerouslySetInnerHTML={{__html:title}}
            />
            <h2
                className={css.slogan}
                dangerouslySetInnerHTML={{__html:slogan}}
            />
        </header>
    )
}