import { AboutUs, Blog, Clients, Hero, HowTo, Projects, Services, Statistics, WatchWord, WhyUs } from "v-home/index"
import radek_adamczyk_img from "img/radek-adamczyk.webp";
import filip_bukowiecki_img from "img/filip-bukowiecki.webp";
import stat_img_01 from "img/aqua-background.jpg";
import stat_img_02 from "img/gray-background.jpg";
import stat_img_03 from "img/green-background.jpg";
import css from "css/views/HomePage.module.scss";
import ac_icon from "img/ac-icon.png";
import avengers_icon from "img/avengers-icon.png";
import dd_icon from"img/dd-icon.png";
import f4_icon from "img/f-4-icon.png";
import gatsby_icon from "img/gatsby-icon.png";
import vercel_icon from "img/vercel-icon.png";

export default function HomePage(){
  return (
    <>
      <Hero
        buttons={[
          {
            label:"Kim jesteśmy",
            uri:"#"
          },
          {
            label:"Wiedza",
            uri:"#"
          },
          {
            label:"Kontakt",
            uri:"#"
          },
        ]}
        callToAction="Pokaż się światu razem z nami"
        slogan={`Zbuduj z <br/>nami internet`}
        socials={[
          {
            label:"Facebook",
            url:"#"
          },
          {
            label:"YouTube",
            url:"#"
          },
          {
            label:"Twitter",
            url:"#"
          },
          {
            label:"Instagram",
            url:"#"
          },
        ]}
        title="RadWEB"
      />
      <main>
        <WhyUs
          content={`Pellentesque ipsum neque, malesuada sed congue at, tristique a massa. Cras facilisis vitae eros at pretium. Aenean facilisis nec dolor nec vehicula. Ut dapibus, libero sed congue consectetur, ipsum felis blandit felis, id aliquam neque dui ac lorem. Sed sodales, orci in varius luctus, lectus massa pharetra dui, rutrum ornare sapien ligula sit amet lorem. Maecenas dolor ante, vehicula ut lorem nec, fermentum pretium orci. Ut interd`}
        />
        <HowTo
          title="Jak działamy?"
          cards={[
            {
              content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non bibendum ligula, in euismod enim.",
              number:1,
              title:"Cierpliwość"
            },
            {
              content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non bibendum ligula, in euismod enim.",
              number:2,
              title:"Cierpliwość"
            },
            {
              content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non bibendum ligula, in euismod enim.",
              number:3,
              title:"Cierpliwość"
            },
            {
              content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non bibendum ligula, in euismod enim.",
              number:4,
              title:"Cierpliwość"
            },
          ]}
        />
        <AboutUs
          cards={[
            {
              category:"web",
              fullname:{
                firstname:"Radosław",
                lastname:"Adamczyk"
              },
              image:{
                alt:"Radosław Adamczyk - Specjalista SEO/SEM - Web developer - Front-end developer"               ,
                src:radek_adamczyk_img.src,
                title:""
              },
              occupation:"Spec. SEO/SEM - Web dev - Front-end dev",
              uri:"#"
            },
            {
              category:"video",
              fullname:{
                firstname:"Filip",
                lastname:"Bukowiecki"
              },
              image:{
                alt:"Radosław Adamczyk - Specjalista SEO/SEM - Web developer - Front-end developer"               ,
                src:filip_bukowiecki_img.src,
                title:""
              },
              occupation:"Videomaker - Montażysta",
              uri:"#"
            },
          ]}
          content="Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti."
          title="Kim jestesmy? "
        />
        <Statistics
          cards={[
            {
              type:"plain",
              label:"Klientów",
              value:"8"
            },
            {
              type:"image",
              alt:"",
              src:stat_img_01.src,
              title:""
            },
            {
              type:"plain",
              label:"Lat doświadczenia",
              value:`${new Date().getFullYear() - 2016}`
            },
            {
              type:"image",
              alt:"",
              src:stat_img_02.src,
              title:""
            },
            {
              type:"plain",
              label:"Projektów",
              value:"6"
            },
            {
              type:"image",
              alt:"",
              src:stat_img_03.src,
              title:""
            },
          ]}
        />    
        <WatchWord
          content="Profesjonalizm w każdym pikselu,<br/>sukces w każdym kliknięciu!"
        />
        <Services
          button={{
            label:"Usługi",
            uri:"#"
          }}
          cards={[
            {
              button:{
                label:"Więcej",
                uri:"#"
              },
              content:`Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.`,
              image:{
                alt:"",
                src:stat_img_01.src,
                title:""
              },
              title:"Programowanie"
            },
            {
              button:{
                label:"Więcej",
                uri:"#"
              },
              content:`Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.`,
              image:{
                alt:"",
                src:stat_img_02.src,
                title:""
              },
              title:"SEO"
            },
            {
              button:{
                label:"Więcej",
                uri:"#"
              },
              content:`Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.`,
              image:{
                alt:"",
                src:stat_img_03.src,
                title:""
              },
              title:"Videomaking"
            },
          ]}
          content={`Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti. `}
          title="Co u nas znajdziesz?"
        />
          <Projects
            button={{
              label:"Nasze prace",
              uri:"#"
            }}
            title="Nasze projekty<br/>i realizacje"
          />
          <Clients
            cards={[
              {
                alt:"",
                src:ac_icon.src,
                title:""
              },
              {
                alt:"",
                src:avengers_icon.src,
                title:""
              },
              {
                alt:"",
                src:dd_icon.src,
                title:""
              },
              {
                alt:"",
                src:f4_icon.src,
                title:""
              },
              {
                alt:"",
                src:gatsby_icon.src,
                title:""
              },
              {
                alt:"",
                src:vercel_icon.src,
                title:""
              },
            ]}
            content="Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti. "
            title="Kto nam zaufał?"
          />
          <Blog
            button={{
              label:"Wszystkie wpisy",
              uri:"#"
            }}
            content={`Nunc euismod porta erat eget tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra neque turpis, ac rutrum sapien egestas ac. Suspendisse potenti. `}
            title="Blog"
          />
      </main>
    </>
  )
}