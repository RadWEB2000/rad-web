import {tBrand} from "footer/Brand/Brand.models"
import css from "footer/Brand/Brand.module.scss";

export default function Brand({brand, slogan}:tBrand){
    return(
        <div className={css.wrapper}>
            <strong className={css.brand}>{brand}</strong>
            <em className={css.slogan}>{slogan}</em>
        </div>
    )
}