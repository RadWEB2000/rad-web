import Image from "next/image"
import Link from "next/link"
import {tIndustries} from "v-m-service/Industries/Industries.models"
import css from "v-m-service/Industries/Industries.module.scss"

export default function Industries({cards,image,title}:tIndustries){
    return (
        <div className={css.wrapper} >
              <h2
                    className={css.title} 
                    dangerouslySetInnerHTML={{__html:title}}
                />
            <div className={css.box} >
              
                <ul className={css.cards} >
                    {cards.map(({label,uri}, index) => {
                        return (
                            <Link
                                className={css.card} 
                                dangerouslySetInnerHTML={{__html:label}}
                                href={uri}
                                key={index}
                            />
                        )
                    })}
                </ul>
            </div>
            <picture className={css.image__wrapper} >
                <Image
                    alt={image.alt}
                    className={css.image} 
                    fill
                    loading="lazy"
                    src={image.src}
                    title={image.title}
                    quality={40}
                />
            </picture>
        </div>
    )
}