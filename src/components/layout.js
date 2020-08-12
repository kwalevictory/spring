import React from "react";
import Header from "./header";
import "./layout.css"

export const PostLayout = ({children})=>{
    return (
        <>
        <Header/>
        <div className="post-wrapper">{children}</div>
        </>
    )
}
const Layout = ({children})=>{
    return (
        <>
        <Header/>
        <div className="wrapper">{children}</div>
        </>
    )
}
export default Layout;