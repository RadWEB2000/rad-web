"use client"

import css from "v-blog/Search/Search.module.scss"

export default function Search(){
    return (
        <form action="" className={css.wrapper} onSubmit={(e) => e.preventDefault()}>
            <input 
                aria-label="Search through site content"
                className={css.field} 
                id="search" 
                name="search" 
                placeholder="Szukaj"
                type="search" 
                minLength={3}
                maxLength={50}
            />
        </form>
    )
}