
import { useEffect } from "react";
import HeadPortfolio from "../components/HeadPortfolio";
import ScriptsPortfolio from "../components/ScriptsPortfolio";

import { ContactWaysList } from "./contact";
// import { Button } from "@mui/material";
import NextPageButton from "../components/NextPageButton";

export default function Home() {

  useEffect(() => {
    // document.body.className = "dark-vertion black-bg";
    // eval("setActiveStyleSheet('red')")
  });

  const itemsList = []
  var itemCount = 0
  ContactWaysList.forEach((contact) => {
    itemCount++
    itemsList.push(
      <li key={"home-icon-" + itemCount}>
        <a
          target="_new"
          href={contact.link}>
          <i className={"fa " + contact.iconName}>
            {/* {contact.label} */}
          </i>
        </a>
      </li>
    )
  })

  return (
    <>
      <HeadPortfolio selectedPageName={"home"} />
      <section className="mh-home image-bg home-2-img" id="mh-home">
        <div className="img-foverlay img-color-overlay">
          <div className="container">
            <div className="row section-separator xs-column-reverse vertical-middle-content home-padding">
              <div className="col-sm-6">
                <div className="mh-header-info">
                  <div className="mh-promo wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">
                    <span>Hello I&apos;m</span>
                  </div>

                  <h2 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
                    Nallib Tala
                  </h2>
                  <h4 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                    Software Engineer | Analyst Programmer | Web Producer | Front End Developer | Software
                    Developer
                  </h4>
                  <ul className="social-icon wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.7s">
                    {itemsList}
                  </ul>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="hero-img wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.6s">
                  <div className="img-border">
                    <img src="assets/images/hero.png" alt="" className="img-fluid" />
                  </div>
                </div>
                <NextPageButton
                  linkTo={"/about"}
                  buttonLabel={"About"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ScriptsPortfolio />
    </>
  )
}
