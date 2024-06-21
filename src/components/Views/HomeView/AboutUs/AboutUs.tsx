import {tAboutUs} from "v-home/AboutUs/AboutUs.models";
import { AboutUsCards } from "v-home/index";
import css from "v-home/AboutUs/AboutUs.module.scss";
import {PrimaryButton} from "buttons/index";

export default function AboutUs({cards,content,title}:tAboutUs){
    return(
        <div className={css.wrapper}>
            <section className={css.box}>
                <header className={css.details}>
                    <h2 className={css.title}>{title}</h2>
                    <PrimaryButton
                        label="Twój zespół"
                        uri="#"
                    />
                </header>
                <p
                    className={css.content}
                    dangerouslySetInnerHTML={{__html:content}}
                />
            </section>
            <AboutUsCards cards={cards} />
        </div>
    )
}