import { tAuthor } from "footer/Author/Author.models";
import css from "footer/Author/Author.module.scss";

export default function Author({brand,year}:tAuthor){
    return (
        <div className={css.wrapper}>
            <p className={css.content}>
                {`${brand} ©️ ${year.start} - ${year.end}`}
            </p>
        </div>
    )
}