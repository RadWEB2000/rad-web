import {tHero} from "v-directory/Hero/Hero.models"
import css from "v-directory/Hero/Hero.module.scss"

export default function Hero({content,search,slogan,title}:tHero){
    return (
        <div className={css.wrapper} >
            <header
                 className={css.box} 
            >
                <h1
                     className={css.title} 
                    dangerouslySetInnerHTML={{__html:title}}
                />
                <h2
                    className={css.slogan} 
                    dangerouslySetInnerHTML={{__html:slogan}}
                />
                <p
                    className={css.content} 
                    dangerouslySetInnerHTML={{__html:content}}
                />
            </header>
            <form 
                action="" 
                className={css.search} 
            >
                <label 
                    className={css.search__label} 
                    htmlFor="search"
                >
                    {search.label}
                </label>
                <input 
                    className={css.search__field} 
                    id="search" 
                    name="search" 
                    placeholder={search.placeholder}
                    type="search" 
                />
            </form>
        </div>
    )
}