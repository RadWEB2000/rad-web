import Image from "next/image"
import {tCard,tMethods} from "v-about/Methods/Methods.models";
import css from "v-about/Methods/Methods.module.scss";

function Card({content,image,title}:tCard){
    return(
        <li className={css.card} >
            <picture  className={css.card__image__wrapper}>
                <Image
                    alt={image.alt}
                    className={css.card__image}
                    fill
                    loading="lazy"
                    src={image.src}
                    title={image.title}
                    quality={40}
                />
            </picture>
            <h4 className={css.card__title}>{title}</h4>
            <p
                className={css.card__content}
                dangerouslySetInnerHTML={{__html:content}}
            />
        </li>
    )
}


export default function Methods({cards,title}:tMethods){
    return(
        <div  className={css.wrapper} >
            <h2  
                className={css.title} 
                dangerouslySetInnerHTML={{__html:title}}
            />
            <ul  className={css.cards} >
                {cards.map((item,index) => {
                    return(
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