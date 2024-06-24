import {FullscreenMenu, TopBar} from "l-d-nav/index";
import { tDesktopNavigation } from "l-d-nav/DesktopNavigation.models";

export default function DesktopNavigation({bar, fullscreen}:tDesktopNavigation){
    return (
        <>
            <TopBar
                {...bar}
            />
            <FullscreenMenu
                {...fullscreen}
            />
        </>
    )
}