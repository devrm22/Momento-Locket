import Link from "next/link";
import React from "react";

const BreadCrumb = ({page, link, linkTxt}) =>{
    return(
        <div className="my-5">
            <h5 className="text-base font-medium text-center">
                <Link href="/">Home</Link>
                <span> / </span>
                <Link href={link? link: "/"}>{ linkTxt? linkTxt: "My Account" }</Link>
            </h5>
            <h1 className="text-gradient text-5xl text-center uppercase py-5">{ page? page: "My Account" }</h1>
            <h6 className="text-center text-base font-light">By Galatea Jewelry by Artist</h6>
        </div>
    )
}
export default BreadCrumb;