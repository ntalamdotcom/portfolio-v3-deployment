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
    navBar.forEach(ele => {
        var classDesc = "nav-item"
        if (selectedPageName && ele.name === selectedPageName) {
            classDesc += " active"
        }
        menuList.push(
            <li className={classDesc}>
                {/* {ele.target &&
                    <Link
                        target={ele.target}
                        href={ele.link}
                        className="nav-link"
                    >{ele.title}
                    </Link>
                } */}
                {/* {!ele.target && */}
                <Link
                    href={ele.link}
                    className="nav-link"
                >{ele.title}
                </Link>
                {/* } */}

            </li >
        )
    });
    return <>
        <Head>
            <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
            {/* <!-- Font Awesome --> */}
            {/* <link rel="stylesheet" href="assets/icons/font-awesome-4.7.0/css/font-awesome.min.css" /> */}
            {/* <!-- Bootstrap CSS --> */}
            {/* <link rel="stylesheet" href="assets/plugins/css/bootstrap.min.css" /> */}
            {/* <!-- Animate CSS--> */}
            {/* <link rel="stylesheet" href="assets/plugins/css/animate.css" /> */}
            {/* <!-- Owl Carousel CSS--> */}
            <link rel="stylesheet" href="assets/plugins/css/owl.css" />
            {/* <!-- Fancybox--> */}
            <link rel="stylesheet" href="assets/plugins/css/jquery.fancybox.min.css" />

            {/* <!-- Custom CSS--> */}
            <link rel="stylesheet" href="assets/css/styles.css" />
            <link rel="stylesheet" href="assets/css/responsive.css" />

            {/* <!-- Colors --> */}
            <link rel="alternate stylesheet" href="assets/css/colors/blue.css" title="blue" />
            <link rel="stylesheet" href="assets/css/colors/defauld.css" title="defauld" />

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
        </Head>
    </>
}