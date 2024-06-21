import Link from "next/link";
import { FaHandPointLeft as Hand } from "react-icons/fa";
import {tSecondaryButton} from "buttons/SecondaryButton/SecondaryButton.models";
import css from "buttons/SecondaryButton/SecondaryButton.module.scss"

export default function SecondaryButton({label,uri}:tSecondaryButton){
    return (
        <Link className={css.wrapper} href={uri}>
            <span
                className={css.label} 
                dangerouslySetInnerHTML={{__html:label}}
            />
            <i
                 className={css.icon} 
            >
                <Hand/>
            </i>
        </Link>
    )
}