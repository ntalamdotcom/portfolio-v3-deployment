import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
// import ScriptsPortfolio from "./ScriptsPortfolio";


export default function HeadPortfolio({
    selectedPageName
}) {

    // const [loadAnimations, setLoadAnimations] = useState<boolean>(false)
    useEffect(() => {
        document.body.className = "dark-vertion black-bg";
        eval("setActiveStyleSheet('red')")
        // if (!loadAnimations) {
        //     setLoadAnimations(true)
        // }
    }, []);
    const navBar = [
        {
            "link": "/",
            "name": "home", //To be compared as a string to indicate section selected
            "title": "Home", //the name showed as a label for the link
        },
        {
            "link": "/about",
            "name": "about",
            "title": "About",
        },
        {
            "link": "/what-i-do",
            "title": "What I do",
            "name": "what-i-do",
        },
        // {
        //     "link": "/featured-projects",
        //     "title": "Featured Projects",
        //     "name": "Featured Projects",
        // },

        {
            "link": "/experience-education",
            "title": "Experience & Education",
            "name": "experience-education",
        },
        {
            "link": "/portfolio",
            "name": "portfolio",
            "title": "Portfolio"
        },
        // {
        //     "link": "/featured-posts",
        //     "title": "Featured Posts",
        //     "name": "Featured Posts",
        // },
        {
            "link": "/skills",
            "name": "skills",
            "title": "Skills",
        },
        {
            "link": "/blog",
            "name": "blog",
            "title": "Blog",
        },
        {
            "link": "/contact",
            // "link": "https://ntalam.com/es/contact-ntalam",
            "name": "contact",
            "title": "Contact",
            // "target": "_new",
        },
    ]
    const menuList = []
    var itemCount = 0
    navBar.forEach(ele => {
        var classDesc = "nav-item"
        if (selectedPageName && ele.name === selectedPageName) {
            classDesc += " active"
        }
        itemCount++
        menuList.push(
            <li
                key={"nav-item-" + itemCount}
                className={classDesc}>
                {/* {ele.target &&
                    <Link
                        target={ele.target}
                        href={ele.link}
                        className="nav-link"
                    >{ele.title}
                    </Link>
                } */}
                {/* {!ele.target && */}
                {/* It doesnt work with Link */}
                <a
                    target="_self"
                    href={ele.link}
                    className="nav-link"
                >{ele.title}
                </a>
                {/* } */}

            </li >
        )
    });
    return <>
        {/* <Head> */}

        <header className="black-bg mh-header mh-fixed-nav nav-scroll mh-xs-mobile-nav" id="mh-header">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg mh-nav nav-btn">
                        <button
                            className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto ml-auto">
                                {menuList}

                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
        {/* </Head> */}
    </>
}