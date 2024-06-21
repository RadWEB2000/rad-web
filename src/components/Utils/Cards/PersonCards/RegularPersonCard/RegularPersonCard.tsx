import Image from "next/image";
import Link from "next/link";
import css from "c-person/RegularPersonCard/RegularPersonCard.module.scss"
import {tRegularPersonCard} from "c-person/RegularPersonCard/RegularPersonCard.models";

export default function RegularPersonCard({category,fullname,image,occupation,uri}:tRegularPersonCard){
    return (
        <Link className={css.wrapper} href={uri}>
            <div className={css.box} >
                <picture className={css.image__wrapper} >
                    <Image
                        alt={image.alt}
                        className={css.image} 
                        fill
                        src={image.src}
                        title={image.title}
                    />
                </picture>
                <div className={css.details} >
                    <p className={css.category} >{category}</p>
                    <strong className={css.fullname} >
                        <span className={css.firstname}>{fullname.firstname}</span>
                        <span className={css.lastname}>{fullname.lastname}</span>
                    </strong>
                </div>
            </div>
            <h4 className={css.occupation}  dangerouslySetInnerHTML={{__html:occupation}} />
        </Link>
    )
}