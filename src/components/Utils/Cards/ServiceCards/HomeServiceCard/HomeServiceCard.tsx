import Image from "next/image";
import Link from "next/link";
import { tHomeServiceCard } from 'c-service/HomeServiceCard/HomeServiceCard.models';
import css from "c-service/HomeServiceCard/HomeServiceCard.module.scss";

export default function HomeServiceCard({button,content,image,title}:tHomeServiceCard){
    return (
        <li className={css.wrapper} >
            <picture className={css.image__wrapper} >
                <Image
                    alt={image.alt}
                    className={css.image} 
                    fill
                    src={image.src}
                    title={image.title}
                    quality={55}
                />
            </picture>
            <div className={css.box} >
                <div className={css.details} >
                    <h3  className={css.title} >{title}</h3>
                    <p
                        className={css.content} 
                        dangerouslySetInnerHTML={{__html:content}}
                    />
                </div>
                <div className={css.button__wrapper} >
                    <Link  className={css.button} href={button.uri}>
                        {button.label}
                    </Link>
                </div>
            </div>
        </li>
    )
}