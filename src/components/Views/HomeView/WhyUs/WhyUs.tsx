import {tWhyUs} from "v-home/WhyUs/WhyUs.models";
import css from "v-home/WhyUs/WhyUs.module.scss";

export default function WhyUs({content}:tWhyUs){
    return (
        <section
            className={css.wrapper}
        >
            <p
                className={css.content}
                dangerouslySetInnerHTML={{__html:content}}
            />
        </section>
    )
}