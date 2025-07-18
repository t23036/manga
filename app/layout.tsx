import"./globals.css";
import Header from "./components/Header";
import React from "react";
import { ReactNode } from "react";

export const metadata = {
 title:"kigyou App",
 description:"AAA",
};

export default function RootLayout(
  {children}:
  {children:ReactNode}
  ){
  return (
    <html>
    <body>
    <Header/>
    {children}
    </body>
    </html>
  );
}
