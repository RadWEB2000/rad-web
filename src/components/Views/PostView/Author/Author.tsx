import Image from "next/image";
import Link from "next/link";
import css from "v-post/Author/Author.module.scss";
import {tAuthor} from "v-post/Author/Author.models"
export default function Author({fullname,image,occupation,uri}:tAuthor){
    return(
        <div className={css.wrapper}>
            <picture className={css.image__wrapper}>
                <Image
                    alt={image.alt}
                    className={css.image}
                    fill
                    loading="lazy"
                    src={image.src}
                    title={image.title}
                />
            </picture>
            <div className={css.box}>
            <Link className={css.fullname} href={uri}>
                {`${fullname.firstname} ${fullname.lastname}`}
            </Link>
            <p
                className={css.occupation}
                dangerouslySetInnerHTML={{__html:occupation}}
            />
            </div>
        </div>
    )
}