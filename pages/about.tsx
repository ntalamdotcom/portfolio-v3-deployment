// import { Head } from "next/document";

// import Head from "next/head";
// import Link from "next/link";
import { useEffect } from "react";
import HeadPortfolio from "../components/HeadPortfolio";
import ScriptsPortfolio from "../components/ScriptsPortfolio";
import NextPageButton from "../components/NextPageButton";
// import SocialIcons from "../components/SocialIcons";

export const AvailableTechnologies = [
  {
    imageName: "php",
    label: "PHP",
  },
  {
    imageName: "linux",
    label: "Linux",
  },
  {
    imageName: "unity",
    label: "Unity",
  },
  {
    imageName: "css",
    label: "CSS",
  },
  {
    imageName: "react",
    label: "React",
  },
  {
    imageName: "wordpress",
    label: "Wordpress",
  },
  {
    imageName: "adobe-ps",
    label: "Adobe Photoshop",
  },
  {
    imageName: "google-cloud",
    label: "Google Cloud",
  },
  {
    imageName: "primefaces",
    label: "PrimeFaces",
  },
  {
    imageName: "nodejs",
    label: "NodeJS",
  },
  {
    imageName: "amazon-aws",
    label: "AWS",
  },
  {
    imageName: "postgresql",
    label: "Postgresql",
  },
  {
    imageName: "mysql",
    label: "MySQL",
  },
  {
    imageName: "vscode",
    label: "VsCode",
  },
  {
    imageName: "krita",
    label: "Krita",
  },
]

export default function About() {

  useEffect(() => {
    document.body.className = "dark-vertion black-bg";
    eval("setActiveStyleSheet('red')")
  });



  const itemsList = []
  var itemCount = 0;
  AvailableTechnologies.forEach(ele => {
    itemCount++
    itemsList.push(
      <li
        key={"home-icon-" + itemCount}
      >
        <img alt={ele.label}
          src={"assets/images/" + ele.imageName + "-64.png "} />
      </li>
    )
  });

  return (
    <>
      <HeadPortfolio selectedPageName={"about"} />
      <section className="mh-about" id="mh-about">
        <div className="img-foverlay img-color-overlay">
          <div className="container">
            <div className="row section-separator">
              <div className="col-sm-12 col-md-6">
                <div className="mh-about-img shadow-2 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">
                  <img src="assets/images/ab-img.png" alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="mh-about-inner">
                  <h2 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">About Me</h2>
                  <p className="wow fadeInUp" data-wow-duration="0.8s"
                    data-wow-delay="0.2s">Hello, I’m a Nallib,
                    a I.T. developer currently based in Australia. I have rich experience in multiple industries and technologies and happy to acquire new skills.</p>
                  <p className="wow fadeInUp" data-wow-duration="0.8s"
                    data-wow-delay="0.2s">
                    The following are the technologies I have experience with.
                  </p>

                  <div className="mh-about-tag wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                    <ul>
                      {itemsList}

                    </ul>
                  </div>
                  <a
                    style={{
                      margin: '10px',
                    }}
                    target="_new"
                    href="https://ntalam.com/contact-ntalam/"
                    className="btn btn-fill wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.4s">Contact me
                    <i className="fa fa-address-book" />
                  </a>
                  {/* <NextPageButton
                    linkTo={"/what-i-do"}
                    buttonLabel={"Contact me"}
                  /> */}
                  <NextPageButton
                    linkTo={"/what-i-do"}
                    buttonLabel={"What I do"}
                  />
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
