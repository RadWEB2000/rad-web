import Image from "next/image";
import Link from "next/link";
import { MdFace as Face} from "react-icons/md";
import {tReguralBlogCard} from "c-blog/ReguralBlogCard/ReguralBlogCard.models";
import css from "c-blog/ReguralBlogCard/ReguralBlogCard.module.scss";


export default function ReguralBlogCard({uri, author,excerpt,image,release,title}:tReguralBlogCard){
    return (
        <Link className={css.wrapper} href={uri} rel="index follow" lang="pl" >
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
            <div className={css.main}>
                <h3
                    className={css.title}
                    dangerouslySetInnerHTML={{__html:title}}
                />
                <p
                    className={css.excerpt}
                    dangerouslySetInnerHTML={{__html:excerpt.length <= 120 ? excerpt : `${excerpt.substring(0,117)}...`}}
                />
            </div>
            <div className={css.details}>
                <p className={css.author}>
                    <i className={css.author__icon}>
                        <Face/>
                    </i>
                    <span
                        className={css.author__label}
                        dangerouslySetInnerHTML={{__html: `${author.firstname} ${author.lastname}`}}                    
                    />
                </p>
                <p className={css.release}>{release}</p>
            </div>
        </Link>
    )
}