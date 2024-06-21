import Image from "next/image";
import Link from "next/link";
import {tPrimaryBlogCard} from "c-blog/PrimaryBlogCard/PrimaryBlogCard.models";
import css from "c-blog/PrimaryBlogCard/PrimaryBlogCard.module.scss"

export default function PrimaryBlogCard({author,button,excerpt,image,release,title}:tPrimaryBlogCard){
    return(
        <li className={css.wrapper}>
            <picture className={css.image__wrapper}>
                <Image
                    alt={image.alt}
                    className={css.image}
                    fill
                    loading="lazy"
                    src={image.src}
                    title={image.title}
                    quality={30}
                />
            </picture>
            <div className={css.box}>
                <h3 className={css.title}>{title}</h3>
                <p 
                    className={css.excerpt}
                    dangerouslySetInnerHTML={{__html:excerpt.substring(0,120)}} 
                />
            </div>
            <div className={css.details}>
                <p className={css.author}>{author}</p>
                <p className={css.release}>{release}</p>
            </div>
            <Link className={css.button} href="" >
                Więcej
            </Link>
        </li>
    )
}