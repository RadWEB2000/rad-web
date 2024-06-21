import Image from "next/image";
import {tHero} from "v-project/Hero/Hero.models"
import css from "v-project/Hero/Hero.module.scss"

export default function Hero({category,content,image,title}:tHero){
    return (
        <div
            className={css.wrapper}
        >
            <header
                className={css.box}
            >
                <strong
                    className={css.category}
                    dangerouslySetInnerHTML={{__html:category}}
                />
                <h1
                    className={css.title}
                    dangerouslySetInnerHTML={{__html:title}}
                />
                <p
                    className={css.content}    
                    dangerouslySetInnerHTML={{__html:content}}
                />
            </header>
            <picture
                className={css.image__wrapper}
            >
                <Image
                    alt={image.alt}
                    className={css.image}
                    fill
                    loading="eager"
                    priority
                    src={image.src}
                    title={image.title}
                    quality={40}
                />
            </picture>
        </div>
    )
}