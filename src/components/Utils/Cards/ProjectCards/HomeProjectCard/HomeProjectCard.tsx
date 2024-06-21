import Image from "next/image";
import Link from "next/link";
import css from "c-project/HomeProjectCard/HomeProjectCard.module.scss"
import { tHomeProjectCard } from "c-project/HomeProjectCard/HomeProjectCard.models";

export default function HomeProjectCard({button,description,image,author,release,title}:tHomeProjectCard){
    return (
        <li className={css.wrapper} >
            <div className={css.head} >
                <h4 className={css.title}>{title}</h4>
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
            <hr className={css.line} />
            <div className={css.body} >
                <section className={css.description} >
                    <strong className={css.description__label}>{description.label}</strong>
                    <p 
                        className={css.description__content}
                        dangerouslySetInnerHTML={{__html:description.content}}
                    />
                </section>
                <div className={css.details} >
                    <ul className={css.informations} >
                        <li className={css.information} >
                            <b className={css.information__label}>{release.label}</b>
                            <p className={css.information__content}>{release.content}</p>
                        </li>
                        <li className={css.information} >
                            <b className={css.information__label}>{author.label}</b>
                            <p className={css.information__content}>{author.content}</p>
                        </li>
                    </ul>
                    <div className={css.button__wrapper} >
                        
                        <Link 
                            className={css.button} 
                            href={button.uri}
                        >
                            {button.label}
                        </Link>
                    </div>
                </div>
            </div>
        </li>
    )
}