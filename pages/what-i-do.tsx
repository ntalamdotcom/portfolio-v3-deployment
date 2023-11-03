import { useEffect } from "react";
import HeadPortfolio from "../components/HeadPortfolio";
import ScriptsPortfolio from "../components/ScriptsPortfolio";
import NextPageButton from "../components/NextPageButton";

export default function Home() {
  useEffect(() => {
    // document.body.className = "dark-vertion black-bg";
  });

  return (
    <>
      <HeadPortfolio selectedPageName={"what-i-do"} />
      <section className="mh-service">
        <div className="img-foverlay img-color-overlay">
          <div className="container">
            <div className="row section-separator">
              <div className="col-sm-12 text-center section-title wow fadeInUp" data-wow-duration="0.8s"
                data-wow-delay="0.2s">
                <h2>What I do</h2>
              </div>
              <div className="col-sm-4">
                <div className="mh-service-item shadow-1 dark-bg wow fadeInUp" data-wow-duration="0.8s"
                  data-wow-delay="0.3s">
                  <i className="fa fa-bullseye purple-color"></i>
                  <h3>Full-Stack Development</h3>
                  <p>
                    I have extensive experience in both front-end and back-end development, which makes me a versatile asset for any team.
                  </p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="mh-service-item shadow-1 dark-bg wow fadeInUp" data-wow-duration="0.8s"
                  data-wow-delay="0.5s">
                  <i className="fa fa-code iron-color"></i>
                  <h3>Cloud Computing</h3>
                  <p>
                    My experience with various AWS services and Google Cloud Platform shows a strong proficiency in cloud-based solutions.
                  </p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="mh-service-item shadow-1 dark-bg wow fadeInUp" data-wow-duration="0.8s"
                  data-wow-delay="0.7s">
                  <i className="fa fa-object-ungroup sky-color"></i>
                  <h3>Web Applications and Software Development</h3>
                  <p>
                    My ability to develop web applications for various industries (like mining and sales) makes this one of my core services.
                  </p>
                </div>
              </div>

            </div>
            <div className="row section-separator">
              <div
                className="col-sm-12 col-md-8 wow fadeInUp">
              </div>
              <div
                className="col-sm-12 col-md-4 wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.2s">
                <NextPageButton
                  linkTo={"/experience-education"}
                  buttonLabel={"Experience & Education"}
                />
              </div>
            </div>
          </div>
        </div>
      </section >
      <ScriptsPortfolio />
    </>
  )
}
