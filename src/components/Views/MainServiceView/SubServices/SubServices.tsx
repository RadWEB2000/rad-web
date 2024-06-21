import Image from "next/image";
import {tSubServices} from "v-m-service/SubServices/SubServices.models";
import css from "v-m-service/SubServices/SubServices.module.scss";


export default function SubServices({cards,content,title}:tSubServices){
    return(
        <div className={css.wrapper} >
            <section className={css.box} >
                <h2
                    className={css.title} 
                    dangerouslySetInnerHTML={{__html:title}}
                />
                <p
                    className={css.content} 
                    dangerouslySetInnerHTML={{__html:content}}
                />
            </section>
            <ul
                 className={css.cards} 
            >
                {cards?.map(({icon,title}) => {
                    return(
                        <li 
                            className={css.card} 
                            key={title} 
                        >
                            <picture className={css.card__image__wrapper}  >
                                <Image
                                    alt={icon.alt}
                                    className={css.card__image} 
                                    height={150}
                                    loading="lazy"
                                    src={icon.src}
                                    title={icon.title}
                                    width={150}
                                />
                            </picture>
                            <h3
                                className={css.card__title} 
                                dangerouslySetInnerHTML={{__html:title}}
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}