import {BigMenu, Bar} from "l-nav/index";
import { tNavigation } from "l-nav/Navigation.models";

export default function DesktopNavigation({bar,menu}:tNavigation){
    return (
        <>
            <Bar
                {...bar}
            />
            <BigMenu
                {...menu}
            />
        </>
    )
}