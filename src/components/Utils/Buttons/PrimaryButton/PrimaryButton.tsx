import Link from "next/link";
import {tPrimaryButton} from "buttons/PrimaryButton/PrimaryButton.models";
import css from "buttons/PrimaryButton/PrimaryButton.module.scss";
import { FaArrowRightLong as Arrow } from "react-icons/fa6";

export default function PrimaryButton({label,uri}:tPrimaryButton){
    return (
        <Link className={css.wrapper} href={uri}>
            <span className={css.label} >{label}</span>
            <i className={css.icon}><Arrow/></i>
        </Link>
    )
}