import Link from "next/link";
import {tHero} from "v-post/Hero/Hero.models";
import { TbArrowBadgeRightFilled as Arrow} from "react-icons/tb";
import Image from "next/image";
import { FcClock as Clock, FcCalendar as Callendar,  FcReading  as Face } from "react-icons/fc";
import css from "v-post/Hero/Hero.module.scss"

export default function Hero({breadcrumbs, author,image,readingTime,release,title}:tHero){
    return (
        <>
        <div className={css.wrapper} >
            <ul className={css.breadcrumbs} >
                {breadcrumbs.map(({label,uri},index) => {
                    if(index === breadcrumbs.length - 1){
                        return (
                            <Link  className={css.breadcrumb__item}  href={uri} key={index}>
                                {label}
                            </Link>
                        )
                    }
                    else {
                        return(
                            <>
                                <Link className={css.breadcrumb__item}  href={uri} key={index}>
                                    {label}
                                </Link>
                                <span className={css.breadcrumb__separator} ><Arrow/></span>
                            </>
                        )
                    }
                })}
            </ul>
             <h1
                className={css.title} 
                dangerouslySetInnerHTML={{__html:title}}
             />
             <div  className={css.details} >
                <p  className={css.detail} >
                    <i className={css.detail__icon} >
                        <Clock/>
                    </i>
                    <span className={css.detail__label} >
                        {readingTime}
                    </span>
                </p>
                <p className={css.detail} >
                    <i className={css.detail__icon} >
                        <Callendar/>
                    </i>
                    <span className={css.detail__label}>
                        {release}
                    </span>
                </p>
                <p className={css.detail} >
                    <i className={css.detail__icon} >
                        <Face/>
                    </i>
                    <span className={css.detail__label}>
                        {author}
                    </span>
                </p>
             </div>
        </div>
        <picture className={css.image__wrapper}>
            <Image
                alt={image.alt}
                className={css.image}
                fill
                loading="eager"
                priority
                src={image.src}
                title={image.title}
                quality={70}
            />    
        </picture>   
        </>
    )
}