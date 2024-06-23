import {tFullscreenMenu} from "l-d-nav/FullscreenMenu/FullscreenMenu.models"
import Link from "next/link"
import { FaArrowRight as Arrow } from "react-icons/fa6";

export default function FullscreenMenu({menu, blog}:tFullscreenMenu){
    return (
        <div>
            <ul>
                {menu.map(({label,uri,submenu}, index) => {
                    return (
                       <li key={index} >
                            <Link href={uri} >
                                {label}
                            </Link>
                            {
                                submenu &&
                                <button>
                                    <Arrow/>
                                </button>
                            }
                       </li>
                    )
                })}
            </ul>
            <div>
                <ul>
                    {blog.map(({label, uri}, index) => {
                        return (
                            <Link href={uri} key={index}>
                                {label}
                            </Link>
                        )
                    })}
                </ul>
            </div>
            <div></div>
        </div>
    )
}