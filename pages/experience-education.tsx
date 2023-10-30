// import { Head } from "next/document";

import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import HeadPortfolio from "../components/HeadPortfolio";
import ScriptsPortfolio from "../components/ScriptsPortfolio";
import SocialIcons from "../components/SocialIcons";
import EducationItem from "../components/experienceEducation/EducationItem";
import WorkExperienceItem from "../components/experienceEducation/WorkExperienceItem";

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
                      linkInstitution={"https://ucn.cl"}
                      qualificationName={"Computer Science"}
                      institutionName={"Catholic Univerty of the North (Chile)"}
                      datesStudy={"2010"}
                      certificationDescription={"Bachelor degree of Computer Science, including project management and programming"} />
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
                      detailsURL={undefined} />

                    <div className="mh-work-item dark-bg wow fadeInUp" data-wow-duration="0.8s"
                      data-wow-delay="0.6s">
                      <h4>Art & Multimedia From <a href="#">Oxford University</a></h4>
                      <div className="mh-eduyear">2005-2008</div>
                      <span>Responsibility :</span>
                      <ul className="work-responsibility">
                        <li><i className="fa fa-circle"></i>Validate CSS</li>
                        <li><i className="fa fa-circle"></i>Project Management</li>
                      </ul>
                    </div>
                    {/* <!-- Education Institutes--> */}
                    <div className="mh-work-item dark-bg wow fadeInUp" data-wow-duration="0.8s"
                      data-wow-delay="0.7s">
                      <h4>Art & Multimedia From <a href="#">Oxford University</a></h4>
                      <div className="mh-eduyear">2005-2008</div>
                      <span>Responsibility :</span>
                      <ul className="work-responsibility">
                        <li><i className="fa fa-circle"></i>Validate CSS</li>
                        <li><i className="fa fa-circle"></i>Project Management</li>
                      </ul>
                    </div>
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
