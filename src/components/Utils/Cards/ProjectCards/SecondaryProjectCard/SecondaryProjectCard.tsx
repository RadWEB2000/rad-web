import Link from "next/link";
import {tSecondaryProjectCard} from "c-project/SecondaryProjectCard/SecondaryProjectCard.models"
import Image from "next/image";
import css from "c-project/SecondaryProjectCard/SecondaryProjectCard.module.scss";
export default function SecondaryProjectCard({category,image,slogan,title,uri}:tSecondaryProjectCard){
    return (
        <Link 
            className={css.wrapper}  
            href={uri} 
        >
            <picture
                 className={css.image__wrapper}  
            >
                <Image
                    alt={image.alt}
                    className={css.image}  
                    fill
                    src={image.src}
                    title={image.title}
                    quality={55}
                />
            </picture>
            <div className={css.box}  >
                <strong
                    className={css.category}  
                    dangerouslySetInnerHTML={{__html:category}}
                />
                <h3
                    className={css.title}  
                    dangerouslySetInnerHTML={{__html:title}}
                />
                <p
                     className={css.slogan}  
                    dangerouslySetInnerHTML={{__html:slogan}}
                />
            </div>
        </Link>
    )
}