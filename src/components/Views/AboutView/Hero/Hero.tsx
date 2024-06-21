import Image from "next/image";
import css from "v-about/Hero/Hero.module.scss";
import {tHero} from "v-about/Hero/Hero.models";
export default function Hero({image,title}:tHero){
    return(
        <>
            <header className={css.wrapper}>
                <h1
                    className={css.title}
                    dangerouslySetInnerHTML={{__html:title}}
                />
            </header>
            <picture className={css.image__wrapper}>
                <Image
                    alt={image.alt}
                    className={css.image}
                    fill
                    loading="eager"
                    priority
                    src={image.src}
                    title={image.title}
                    quality={50}
                />
            </picture>
        </>
    )
}