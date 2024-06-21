import Image from "next/image"
import {tCard, tClients} from "v-home/Clients/Clients.models";
import css from "v-home/Clients/Clients.module.scss"

function Card({alt,src,title}:tCard){
    return(
        <li className={css.card}>
            <picture className={css.card__image__wrapper}>
                <Image
                    alt={alt}
                     className={css.card__image}
                    loading="lazy"
                    fill
                    src={src}
                    title={title}
                    quality={30}
                />
            </picture>
        </li>
    )
}

export default function Clients({cards,content,title}:tClients){
    return(
        <div className={css.wrapper}>
            <section className={css.box}>
                <h2  className={css.title}>{title}</h2>
                <p className={css.content} dangerouslySetInnerHTML={{__html:content}}/>
            </section>
            <ul className={css.cards}>
                {cards.map((item, index) => {
                    return (
                        <Card
                            {...item}
                            key={index}
                        />
                    )
                })}
            </ul>
        </div>
    )
}