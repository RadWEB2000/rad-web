import css from "v-projects/Hero/Hero.module.scss";
import {tHero} from "v-projects/Hero/Hero.models"

export default function Hero({content, title, slogan}:tHero){
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
            <p
                className={css.content}
                dangerouslySetInnerHTML={{__html:content}}
            />
        </header>
    )
}