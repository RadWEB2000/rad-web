import {Author, Brand, Menu} from "footer/index";
import { tFooter } from "footer/Footer/Footer.models";
import css from "footer/Footer/Footer.module.scss";

export default function Footer({author,brand,menu}:tFooter){
    return(
        <footer className={css.wrapper}>
            <Brand
                {...brand}
            />
            <Menu
                columns={menu.columns}
            />
            <Author
                {...author}
            />
        </footer>
    )
}