import type { Metadata } from "next";
import { Anton, Inter, JetBrains_Mono } from "next/font/google";
import "css/Global.scss";
import "css/Animations.scss";
import { Footer } from "footer/index";

const anton = Anton({
  weight:["400"],
  display:"swap",
  preload:true,
  subsets:["latin-ext"],
  variable:"--font-anton"
})
const inter = Inter({
  weight:["100","200","300","400","500","600","700","800","900"],
  preload:true,
  subsets:["latin-ext"],
  variable:"--font-inter"
})

const mono = JetBrains_Mono({
  display:"swap",
  preload:false,
  weight:["300","400","600"],
  variable:"--font-mono"
})

const fonts = `${anton.variable} ${inter.variable} ${mono.variable}`;

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fonts}>
        {children}
        <Footer
          author={{
            brand:"RadWEB",
            year:{
              end: new Date().getFullYear(),
              start:2016
            }
          }}
          brand={{
            brand:"RadWEB",
            slogan:"Usługi marketingu online"
          }}
          menu={{
            columns:[
              {
                title:"Informacje",
                items:[
                  {
                    label:"Start",
                    uri:"#"
                  },
                  {
                    label:"O nas",
                    uri:"#"
                  },
                  {
                    label:"Blog",
                    uri:"#"
                  },
                  {
                    label:"Projekty",
                    uri:"#"
                  },
                  {
                    label:"Case study",
                    uri:"#"
                  }
                ]
              },
              {
                title:"Wiedza",
                items:[
                  {
                    label:"Programowanie",
                    uri:"#"
                  },
                  {
                    label:"Pozycjonowanie",
                    uri:"#"
                  },
                  {
                    label:"Systemy operacyjne",
                    uri:"#"
                  },
                  {
                    label:"Copywriting",
                    uri:"#"
                  },
                  {
                    label:"Social Media",
                    uri:"#"
                  },
                  {
                    label:"Videomaking",
                    uri:"#"
                  },
                ]
              },
              {
                title:"Kontakt",
                items:[
                  {
                    label:"Kontakt",
                    uri:"#"
                  },
                  {
                    label:"Polityka prywatności",
                    uri:"#"
                  },
                  {
                    label:"Polityka cookie",
                    uri:"#"
                  },
                  {
                    label:"Regulamin",
                    uri:"#"
                  },
                ]
              },
              {
                title:"Kontakt",
                items:[
                  {
                    label:"Kontakt",
                    uri:"#"
                  },
                  {
                    label:"Polityka prywatności",
                    uri:"#"
                  },
                  {
                    label:"Polityka cookie",
                    uri:"#"
                  },
                  {
                    label:"Regulamin",
                    uri:"#"
                  },
                ]
              },
            ]
          }}
        />
      </body>
    </html>
  );
}