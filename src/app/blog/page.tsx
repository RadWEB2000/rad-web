import {Hero, CategorySection, Articles, Pagination, Search, Sort} from "v-blog/index"
import css from "css/views/BlogPage.module.scss"
import article_img from "img/project-two.jpg";
export default function BlogPage(){
    return (
        <>
            <Hero
                categories={[
                    {
                        label:"Programowanie",
                        uri:"#"
                    },
                    {
                        label:"Pozycjonowanie",
                        uri:"#"
                    },
                    {
                        label:"Videomaking",
                        uri:"#"
                    },
                    {
                        label:"Systemy operacyjne",
                        uri:"#"
                    },
                    {
                        label:"Google",
                        uri:"#"
                    },
                    {
                        label:"Copywriting",
                        uri:"#"
                    },
                    {
                        label:"Social media",
                        uri:"#"
                    },
                    {
                        label:"Reklamy",
                        uri:"#"
                    },
                ]}
                title="Blog"
                slogan="Poszerz swoją wiedzę"
            />
            {/* Search  + Sort w  <aside></aside>*/}
            <aside className={css.managment} >
                <Search/>
                <Sort/>
            </aside>
           <main>
            {/* Cards */}
            <Articles
                cards={[
                    {
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },
                    {
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },
                    {
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },
                    {
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },{
                        author:{
                            firstname:"Radosław",
                            lastname:"Adamczyk"
                        },
                        excerpt:` Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti`,
                        image: {
                            alt:"",
                            src:article_img.src,
                            title:""
                        },
                        release:"21 września 2024",
                        title:"Co znajdziesz nowego w Zorin OS 17?",
                        uri:"#"
                    },
                ]}
            
            />
            <Pagination/>
            {/* Categories box */}
            {/* Content  */}
            
            {/*  */}
            
           </main>
        </>
    )
}