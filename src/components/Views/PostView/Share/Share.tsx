"use client"

import { FacebookShareButton, LinkedinShareButton, RedditShareButton, TelegramShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import {tShare} from "v-post/Share/Share.models";
import { BiLogoFacebookSquare as FacebookIcon } from "react-icons/bi";
import { FaXTwitter as TwitterIcon, FaLinkedinIn as LinkedinIcon, FaTelegram as TelegramIcon, FaWhatsapp as WhatsappIcon, FaReddit as RedditIcon } from "react-icons/fa6";
import css from "v-post/Share/Share.module.scss";

export default function Share({share, title}:tShare){
    return (
        <div className= {css.wrapper}>
            <p className= {css.title}>{title}</p>
            <div className= {css.cards}>
                <FacebookShareButton
                    className= {css.card}
                    url={share.url}
                >
                    <FacebookIcon/>
                </FacebookShareButton>
                <TwitterShareButton
                    className= {css.card}
                    hashtags={share.tags}
                    title={share.title}
                    url={share.url}
                >
                    <TwitterIcon/>
                </TwitterShareButton>
                <LinkedinShareButton
                    className= {css.card}
                    title={share.title}
                    source={share.source ? share.source : "RadWEB"}
                    summary={share.summary}
                    url={share.url}
                >
                    <LinkedinIcon/>
                </LinkedinShareButton>
                <TelegramShareButton
                    className= {css.card}
                    title={share.title}
                    url={share.url}
                >
                    <TelegramIcon/>
                </TelegramShareButton>	
                <WhatsappShareButton
                    className= {css.card}
                    title={share.title}
                    separator={share.separator ? share.separator : " "}
                    url={share.url}
                >
                    <WhatsappIcon/>
                </WhatsappShareButton>
                <RedditShareButton
                    className= {css.card}
                    title={share.title}
                    url={share.url}
                >
                    <RedditIcon/>
                </RedditShareButton>
            </div>
        </div>
    )
}