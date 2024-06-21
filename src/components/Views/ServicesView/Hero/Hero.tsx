import css from "v-services/Hero/Hero.module.scss"
import Image from "next/image";
import {tHero} from "v-services/Hero/Hero.models";

export default function Hero({content,image,slogan,title}:tHero){
    return (
        <div className={css.wrapper} >
            <section className={css.box} >
                <header className={css.headings} >
                    <h1 
                        className={css.title}  
                        dangerouslySetInnerHTML={{__html:title}} 
                    />
                    <h2 
                        className={css.slogan}  
                        dangerouslySetInnerHTML={{__html:slogan}} 
                    />
                </header>
                <p
                    className={css.content} 
                    dangerouslySetInnerHTML={{__html:content}}
                />
            </section>
            <div className={css.media} >
                <picture className={css.image__wrapper} >
                    <Image
                        alt={image.alt}
                         className={css.image} 
                        fill
                        src={image.src}
                        title={image.title}
                        quality={40}
                    />
                </picture>
            </div>
        </div>
    )
}