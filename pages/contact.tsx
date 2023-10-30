// import { Head } from "next/document";

import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import HeadPortfolio from "../components/HeadPortfolio";
import ScriptsPortfolio from "../components/ScriptsPortfolio";
import SocialIcons from "../components/SocialIcons";

export default function Home() {

  useEffect(() => {
    document.body.className = "dark-vertion black-bg";
    eval("setActiveStyleSheet('red')")
  });

  return (
    <>
      <HeadPortfolio selectedPageName={"contact"} />
      <section className="mh-home image-bg home-2-img" id="mh-home">
        <div className="img-foverlay img-color-overlay">
          <div className="container">
            <div className="row section-separator xs-column-reverse vertical-middle-content home-padding">
              <div className="col-sm-6">
                <div className="mh-header-info">
                  <div className="mh-promo wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">
                    <span>Hello I'm</span>
                  </div>

                  <h2 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
                    Nallib Tala
                  </h2>
                  <h4 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                    Software Engineer | Analyst Programmer | Web Producer | Front End Developer | Software
                    Developer
                  </h4>

                  {/* <ul>
                    <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s"><i
                      className="fa fa-envelope"></i><a href="mailto:">getemail@email.com</a></li>
                    <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s"><i
                      className="fa fa-phone"></i><a href="callto:">+12 986 987 7867</a></li>
                  </ul> */}

                  <SocialIcons></SocialIcons>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="hero-img wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.6s">
                  <div className="img-border">
                    <img src="assets/images/hero.png" alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ScriptsPortfolio></ScriptsPortfolio>
    </>
  )
}
