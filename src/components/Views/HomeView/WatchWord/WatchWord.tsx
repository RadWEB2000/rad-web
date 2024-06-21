import { tWatchWord } from "v-home/WatchWord/WatchWord.models";
import css from "v-home/WatchWord/WatchWord.module.scss";
export default function WatchWord({content}:tWatchWord){
    return(
        <section className={css.wrapper}>
            <strong
                className={css.content}
                dangerouslySetInnerHTML={{__html:content}}
            />
        </section>
    )
}