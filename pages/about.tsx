// import { Head } from "next/document";

// import Head from "next/head";
// import Link from "next/link";
import { useEffect } from "react";
import HeadPortfolio from "../components/HeadPortfolio";
import ScriptsPortfolio from "../components/ScriptsPortfolio";
// import SocialIcons from "../components/SocialIcons";

export default function About() {

  useEffect(() => {
    document.body.className = "dark-vertion black-bg";
    eval("setActiveStyleSheet('red')")
  });

  return (
    <>
      <HeadPortfolio selectedPageName={"about"} />
      <section className="mh-about" id="mh-about">
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
                  a Chilean I.T. developer currently based on Australia. I have rich experience in multiple industries and technologies and happy to acquire new skills.</p>
                <p className="wow fadeInUp" data-wow-duration="0.8s"
                  data-wow-delay="0.2s">
                  The following are the technologies I have experience with.
                </p>

                <div className="mh-about-tag wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                  <ul>
                    <li><img alt="PHP logo" src="assets/images/php-64.png " /></li>
                    <li><img alt="Linux logo" src="assets/images/linux-64.png " /></li>
                    <li><img alt="Unity logo" src="assets/images/unity-64.png " /></li>
                    <li><img alt="CSS logo" src="assets/images/css-64.png " /></li>
                    <li><img alt="React logo" src="assets/images/react-64.png " /></li>
                    <li><img alt="Wordpress logo"
                      src="assets/images/wordpress-64.png " /></li>
                    <li><img alt="Adobe P logo"
                      src="assets/images/adobe-ps-64.png " /></li>
                    <li><img alt="Google Cloud logo"
                      src="assets/images/google-cloud-64.png " /></li>
                    <li><img alt="AWS logo"
                      src="assets/images/amazon-aws-64.png " /></li>
                    <li><img alt="Primefaces logo"
                      src="assets/images/primefaces-64.png " /></li>
                    <li><img alt="NodeJS logo"
                      src="assets/images/nodejs-64.png " /></li>

                  </ul>
                </div>
                <a
                  target="_new"
                  href="https://ntalam.com/contact-ntalam/"
                  className="btn btn-fill wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.4s">Contact me
                  <i className="fa fa-address-book" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ScriptsPortfolio></ScriptsPortfolio>
    </>
  )
}
