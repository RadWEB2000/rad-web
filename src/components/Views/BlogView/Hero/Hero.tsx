import Link from "next/link";
import {tHero} from "v-blog/Hero/Hero.models";
import css from "v-blog/Hero/Hero.module.scss";

export default function Hero({categories, title, slogan}:tHero){
    return (
        <header className={css.wrapper} >
            <h1
                className={css.title} 
            >
                <span
                    dangerouslySetInnerHTML={{__html:title}}
                />
                <span
                    dangerouslySetInnerHTML={{__html:slogan}}
                />
            </h1>
            {
                categories &&
                <ul className={css.categories} >
                    {categories.map(({label,uri},index) => {
                        return (
                            <Link  className={css.category}  href={uri} key={index}>
                                {label}
                            </Link>
                        )
                    })}
                </ul>
            }
        </header>
    )
}