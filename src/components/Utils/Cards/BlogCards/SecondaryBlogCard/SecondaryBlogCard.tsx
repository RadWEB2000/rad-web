import Image from "next/image";
import Link from "next/link";
import {tSecondaryBlogCard} from "c-blog/SecondaryBlogCard/SecondaryBlogCard.models"
import css from "c-blog/SecondaryBlogCard/SecondaryBlogCard.module.scss";

export default function SecondaryBlogCard({uri,category, release, title, image}:tSecondaryBlogCard){
    return (
        <Link 
            className={css.wrapper}
            href={uri}
        >
            <div
                className={css.details}
            >
                <Link 
                    className={css.category}
                    href={category.uri}
                >
                    {category.label}
                </Link>
                <p 
                    className={css.release}
                >
                    {release}
                </p>
            </div>
            <picture
                className={css.image__wrapper}
            >
                <Image
                    alt={image.alt}
                    className={css.image}
                    fill
                    src={image.src}
                    title={image.title}
                    quality={30}
                />
            </picture>
            <h3 
                className={css.title}
            >
                {title}
            </h3>
        </Link>
    )
}