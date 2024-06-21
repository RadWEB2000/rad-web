import Image from "next/image";
import css from "v-services/Reasons/Reasons.module.scss"
import {tReasons} from "v-services/Reasons/Reasons.models"
import { GoPlus as Plus } from "react-icons/go";

export default function Reasons({cards,image,title}:tReasons){
    return(
        <div className={css.wrapper} >
            <header className={css.head} >
                <h2
                     className={css.title} 
                    dangerouslySetInnerHTML={{__html:title}}
                />
            </header>
            <ul className={css.cards} >
                {
                    cards.map(({content,title},index) => {
                        return(
                            <li className={css.card}  key={index}>
                                <header  className={css.card__head} >
                                    <span
                                         className={css.card__icon} 
                                    >
                                        <Plus/>
                                    </span>
                                    <h3
                                        className={css.card__title} 
                                        dangerouslySetInnerHTML={{__html:title}}
                                    />
                                </header>
                                <p
                                    className={css.card__content} 
                                    dangerouslySetInnerHTML={{__html:content}}
                                />
                            </li>
                        )
                    })
                }
            </ul>
            <picture className={css.image__wrapper} >
                <Image
                    alt={image.alt}
                    className={css.image} 
                    fill
                    loading="lazy"
                    src={image.src}
                    title={image.title}
                    quality={45}
                />
            </picture>
        </div>
    )
}