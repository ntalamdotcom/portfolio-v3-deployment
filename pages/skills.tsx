// import { Head } from "next/document";

import { useEffect, useState } from "react";
import HeadPortfolio from "../components/HeadPortfolio";
import ScriptsPortfolio from "../components/ScriptsPortfolio";
import SkillsBarItem from "../components/skills/SkillsBarItem";
import TechnicalSkillsItem from "../components/skills/TechnicalSkillsItem";
// import CircularProgress from '@mui/material/CircularProgress';
export default function Skills() {

  const [showProSkills, setShowProSkills] = useState<boolean>(false);
  // const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (showProSkills == false) {
      setShowProSkills(true)
      //     setIsAnimated(true);
    }
    document.body.className = "dark-vertion black-bg";
    //   eval("setActiveStyleSheet('red')")
  }, []);

  const className_ = `mh-professional-skill wow fadeInUp${showProSkills ? 'animated' : ''}`;

  return (
    <>
      <HeadPortfolio selectedPageName={"skills"} />
      <section className="mh-skills" id="mh-skills">
        <div className="home-v-img">
          <div className="container">
            <div className="row section-separator">
              <div className="section-title text-center col-sm-12">
                {/* <!--<h2>Skills</h2>--> */}
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="mh-skills-inner">
                  <div className="mh-professional-skill wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.3s">
                    <div>
                      <h3>Technical Skills</h3>
                      <h4>(current stack)</h4>
                    </div>
                    <div className="each-skills">
                      <TechnicalSkillsItem
                        skillName={"Javascript"}
                        percentageExpert={82}
                      />
                      <TechnicalSkillsItem
                        skillName={"MySql"}
                        percentageExpert={75}
                      />
                      <TechnicalSkillsItem
                        skillName={"Node"}
                        percentageExpert={70}
                      />
                      <TechnicalSkillsItem
                        skillName={"Godot"}
                        percentageExpert={10}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {showProSkills &&
                <div className="col-sm-12 col-md-6">
                  {/* <div className={className_} */}
                  <div className={"mh-professional-skills wow fadeInUp"}
                    data-wow-duration="0.8s" data-wow-delay="0.5s">
                    {/* // className="mh-professional-skills wow fadeInUp" */}
                    <div
                      className={className_}
                      data-wow-duration="0.8s" data-wow-delay="0.5s">
                      <h3>Professional Skills</h3>
                      <ul className="mh-professional-progress">
                        <SkillsBarItem
                          skillName={"Communication Skills"}
                          porcentaje={90} />
                        <SkillsBarItem
                          skillName={"Technical Proficiency"}
                          porcentaje={95} />
                        <SkillsBarItem
                          skillName={"Problem-Solving and Critical Thinking"}
                          porcentaje={92} />
                        <SkillsBarItem
                          skillName={"Teamwork and Collaboration"}
                          porcentaje={80} />
                        <SkillsBarItem
                          skillName={"Leadership Skills"}
                          porcentaje={85} />
                        <SkillsBarItem
                          skillName={"Time Management and Organization"}
                          porcentaje={88} />
                      </ul>
                      <div>
                        <a
                          style={{ color: "#ff8f8f" }}
                          href="https://ntalam.com/2023/10/30/chat-gpt-evaluation/"
                          target="_new"
                        >(About these numbers)</a>
                      </div>

                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </section >
      <ScriptsPortfolio></ScriptsPortfolio>
    </>
  )
}
