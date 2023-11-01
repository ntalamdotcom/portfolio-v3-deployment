
import { useEffect } from "react";
import HeadPortfolio from "../components/HeadPortfolio";
import ScriptsPortfolio from "../components/ScriptsPortfolio";
import EducationItem from "../components/experienceEducation/EducationItem";
import WorkExperienceItem from "../components/experienceEducation/WorkExperienceItem";
import NextPageButton from "../components/NextPageButton";

export default function ExperienceEducation() {

  useEffect(() => {
    document.body.className = "dark-vertion black-bg";
    eval("setActiveStyleSheet('red')")
  });

  return (
    <>
      <HeadPortfolio selectedPageName={"experience-education"} />
      <section className="mh-experince image-bg featured-img-one" id="mh-experience">
        <div className="img-color-overlay">
          <div className="container">
            <div className="row section-separator">
              <div className="col-sm-12 col-md-6">
                <div className="mh-education">
                  <h3 className="wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.2s">Education</h3>
                  <div className="mh-education-deatils">
                    {/* <!-- Education Institutes--> */}

                    <EducationItem
                      linkInstitution={"https://insightacademy.edu.au"}
                      qualificationName={"Business Diploma"}
                      institutionName={"Insight Academy"}
                      datesStudy={"2020"}
                      certificationDescription={"Business administration, management, coaching, website building, and more"} />
                    <EducationItem
                      linkInstitution={"https://sace.edu.au/"}
                      qualificationName={"Advanced English"}
                      institutionName={"SACE Melbourne"}
                      datesStudy={"2018"}
                      certificationDescription={"English course and IELTS preparation"} />
                    <EducationItem
                      linkInstitution={"https://ucn.cl"}
                      qualificationName={"Computer Science"}
                      institutionName={"Catholic University of the North (Chile)"}
                      datesStudy={"2010"}
                      certificationDescription={"Bachelor degree of Computer Science, including project management and programming"} />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="mh-work">
                  <h3>Work Experience</h3>
                  <div className="mh-experience-deatils">
                    <WorkExperienceItem
                      companyName={"Termatrac"}
                      roleName={"Full-stack Developer"}
                      workPeriod={"Feb 2022 - Aug 2022"}
                      companyUrl={"https://termatrac.com"}
                      dutiesList={[
                        "Multiple Data Sources integration",
                        "Front-End development",
                      ]}
                      detailsURL={"https://ntalam.com/commercial-projects/#termatrac"} />
                    <WorkExperienceItem
                      companyName={"Chinchilla Reactor"}
                      roleName={"Full-stack Developer"}
                      workPeriod={"Mar 2018"}
                      companyUrl={"https://ntalam.com"}
                      dutiesList={[
                        "Team Leader",
                        "Prototyping",
                        "Software Development",
                        "Cloud Administration",
                      ]}
                      detailsURL={"https://ntalam.com/commercial-projects/#chinchilla-reactor"} />
                    <WorkExperienceItem
                      companyName={"Opticas Schilling (Chile)"}
                      roleName={"Analyst Programmer"}
                      workPeriod={"Aug 2013 - Oct 2015"}
                      companyUrl={"https://schilling.cl"}
                      dutiesList={[
                        "Solutions research",
                        "Prototyping",
                        "Web development",

                      ]}
                      detailsURL={"https://ntalam.com/commercial-projects/#opticas-schilling"} />
                  </div>
                </div>
              </div>

            </div>

          </div>
          <div className="container">
            <div className="row text-center">
              <div
                className="col-12 col-md-6 col-sm-12 wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.2s">
                <NextPageButton
                  linkTo={"https://ntalam.com/commercial-projects"}
                  buttonLabel={"More Details"}
                />
              </div>
              <div
                className="col-md-6 col-sm-12 col-12 wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.2s">
                <NextPageButton
                  linkTo={"/portfolio"}
                  buttonLabel={"Portfolio"}
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
