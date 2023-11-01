
import { useEffect } from "react";
import HeadPortfolio from "../components/HeadPortfolio";
import ScriptsPortfolio from "../components/ScriptsPortfolio";
import ContactItem from "../components/contact/ContactItem";

export const ContactWaysList = [
  {
    label: "Contact Form",
    iconName: "fa-address-book",
    link: "https://ntalam.com/es/contact-ntalam/",
  },
  {
    label: "Github",
    iconName: "fa-github",
    link: "https://github.com/ntalamdotcom",
  },
  {
    label: "YouTube - Ntalam",
    iconName: "fa-youtube",
    link: "https://youtube/@ntalam",
  },
  {
    label: "LinkedIn",
    iconName: "fa-linkedin",
    link: "https://www.linkedin.com/in/nallib-tala-montenegro/",
  },

]

export default function Home() {

  useEffect(() => {
    document.body.className = "dark-vertion black-bg";
    eval("setActiveStyleSheet('red')")
  });
  const listItems = []

  ContactWaysList.forEach(ele => {
    listItems.push(<ContactItem
      label={ele.label}
      iconName={ele.iconName}
      linkTo={ele.link}
    />)
  });
  return (
    <>
      <HeadPortfolio selectedPageName={"contact"} />
      <section className="mh-footer mh-footer-3">
        <div className="container-fluid">
          <div className="row section-separator">
            <div className="col-sm-12 section-title wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
              <h3>Contact Me</h3>
            </div>
            <div className="map-image image-bg col-sm-12">
              <div className="container mt-30">
                <div className="row">
                  {listItems}

                  <div className="col-sm-12 mh-copyright wow fadeInUp" data-wow-duration="0.8s"
                    data-wow-delay="0.2s">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="text-left text-xs-center">
                          <p>
                            <a
                              target="_new"
                              href="templateshub.net">Templates Hub</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ScriptsPortfolio />
    </>
  )
}
