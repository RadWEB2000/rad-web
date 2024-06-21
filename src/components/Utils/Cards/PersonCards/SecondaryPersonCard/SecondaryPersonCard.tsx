import Image from "next/image";
import Link from "next/link";
import css from "c-person/SecondaryPersonCard/SecondaryPersonCard.module.scss";
import {tSecondaryPersonCard} from "c-person/SecondaryPersonCard/SecondaryPersonCard.models"


export default function SecondaryPersonCard({fullname,image,occupation,uri}:tSecondaryPersonCard){
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
                    loading="lazy"
                    src={image.src}
                    title={image.title}
                    quality={20}
                />
            </picture>
            <section
                className={css.box}
            >
                <h4
                    className={css.fullname}
                >
                    {`${fullname.firstname} ${fullname.lastname}`}
                </h4>
                <strong
                    className={css.occupation}
                    dangerouslySetInnerHTML={{__html:occupation}}
                />
            </section>
        </Link>
    )
}