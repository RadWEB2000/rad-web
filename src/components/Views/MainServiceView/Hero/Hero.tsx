import {tHero} from "v-m-service/Hero/Hero.models"
import css from "v-m-service/Hero/Hero.module.scss"

export default function Hero({content,slogan,title}:tHero){
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