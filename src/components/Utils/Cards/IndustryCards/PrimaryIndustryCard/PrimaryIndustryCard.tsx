import Image from "next/image";
import Link from "next/link";
import {tPrimaryIndustryCard} from "c-industry/PrimaryIndustryCard/PrimaryIndustryCard.models";
import css from "c-industry/PrimaryIndustryCard/PrimaryIndustryCard.module.scss";

export default function PrimaryIndustryCard({button,content,icon,title}:tPrimaryIndustryCard){
    return (
        <li className={css.wrapper} >
            <picture
                 className={css.image} 
            >
                <Image
                    alt={icon.alt}
                    className={css.icon} 
                    fill
                    src={icon.src}
                    title={icon.title}
                    quality={25}
                />
            </picture>
            <div className={css.box} >
                <h3 
                    className={css.title} 
                    dangerouslySetInnerHTML={{__html:title}}
                />
                <p 
                    className={css.content} 
                    dangerouslySetInnerHTML={{__html:content}}
                />
                <Link  
                    className={css.button} 
                    href={button.uri} 
                >
                    {button.label}
                </Link>
            </div>
        </li>
    )
}