
import { useEffect, useState } from "react";
import HeadPortfolio from "../components/HeadPortfolio";
import Modal from '@mui/material/Modal';
import { Box, Button } from "@mui/material";
import PortfolioItem from "../components/PortfolioItem";
import ScriptsPortfolio from "../components/ScriptsPortfolio";
import NextPageButton from "../components/NextPageButton";

export default function Portfolio() {

  useEffect(() => {
    document.body.className = "dark-vertion black-bg";
    eval("setActiveStyleSheet('red')")
    eval("portfolioInit()")
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [modalTitle, setModalTitle] = useState<string>(null);
  const [modalDescription, setModalDescription] = useState<string>(null);
  const [modalLinkToProject, setModalLinkToProject] = useState<string>(null);
  const [modalImage, setModalImage] = useState<string>(null);
  const [modalTechsIcons, setModalTechIcons] = useState(null);
  const [categorySelected, setCategorySelected] = useState<string>(null);


  const listItems = []
  const items = [
    {
      imagePath: "https://ntalam.com/wp-content/uploads/2020/12/unityWordpress.jpg",
      imageAlt: "Wordpress + Unity3D",
      title: "3D website first person",
      subTitle: "subtitle image",
      categories: "web-development",
      technologies: [
        "php",
        "wordpress",
        // "amazon-aws",
        // "adobe-ps",
        // "google-cloud",
        // "linux",
        // "nodejs",
        // "primefaces",
        // "react",
        "unity",
      ],
      linkToProject:
        "https://www.youtube.com/watch?v=tW9BnPKPAEE",
      description: "Using the Wordpress API I made a 3D world with the information of the website",
    },
    {
      imagePath: "assets/images/portfolio/robo-bin-chicken-channel.jpg",
      imageAlt: "robo bin chicken image",
      title: "Robo Bin Chicken",
      subTitle: "Speed painting channel",
      categories: "digital-art",
      technologies: ["krita", "adobe-ps"],
      linkToProject: "https://www.youtube.com/watch?v=kJcU56pRNaM",
      description: "I started a workshop and I am using this channel to practice and upload tutorials as a base for the lessons",
    },
    {
      imagePath: "http://localhost:3000/assets/images/portfolio/portfoliov3.jpg",
      imageAlt: "Screenshot VSCode",
      title: "Jquery to Nextjs",
      subTitle: "A bootstrap exercise",
      categories: "web-development",
      technologies: ["nextjs", "vscode", "jquery", "nodejs"],
      linkToProject: "https://github.com/ntalamdotcom/nextjs-portfolio-adaptation-v3",
      description: "This is the adaptation of hama html jquery portfolio. I took it and remade it on Nextjs",
    },
  ]
  items.forEach(ele => {
    listItems.push(<PortfolioItem
      imagePath={ele.imagePath}
      imageAlt={ele.imageAlt}
      title={ele.title}
      subTitle={ele.subTitle}
      categories={ele.categories}
      handleOpenfunction={handleOpen}
      setModalTitle={setModalTitle}
      setModalDescription={setModalDescription}
      description={ele.description}
      linkToProject={ele.linkToProject}
      setModalLinkToProject={setModalLinkToProject}
      setModalImage={setModalImage}
      technologies={ele.technologies}
      setModalTechIcons={setModalTechIcons}
    />)
  });
  const listCategories = []
  const categoriesItems = [
    {
      name: "Web Development",
      category: "web-development",
      filter: "web-development",
    },
    {
      name: "Digital Arts",
      category: "digital-art",
      filter: "digital-art",
    },
  ]
  categoriesItems.forEach(ele => {
    listCategories.push(
      <li
        onClick={() => {
          setCategorySelected(ele.category)
        }}
        data-filter={"." + ele.filter}
        className="wow fadeInUp"
        data-wow-duration="0.8s"
        data-wow-delay="0.2s">
        <span>{ele.name}</span>
      </li>
    )
  });
  const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  return (
    <>
      <HeadPortfolio selectedPageName={"portfolio"} />
      {/* <div className="img-foverlay img-color-overlay"> */}
      <section className="mh-portfolio" id="mh-portfolio">
        <div className="img-foverlay img-color-overlay">
          <div className="container">
            <div className="row section-separator">
              <div className="section-title col-sm-12 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">
                <h3>Recent Portfolio</h3>
              </div>
              <div className="part col-sm-12">
                <div className="portfolio-nav col-sm-12" id="filter-button">
                  <ul>
                    <li
                      onClick={() => {
                        setCategorySelected(null)
                      }}
                      data-filter="*"
                      className="current wow fadeInUp"
                      data-wow-duration="0.8s"
                      data-wow-delay="0.1s">
                      <span>All Categories</span>
                    </li>
                    {listCategories}
                  </ul>
                </div>
                <div className="mh-project-gallery col-sm-12 wow fadeInUp"
                  id="project-gallery"
                  data-wow-duration="1.5s"
                  data-wow-delay="1.5s">

                  {
                  //TODO: fix this
                  /* "portfolioContainer" causes to load all the items in one place only 
                  but it is needed for filtering
                  */}
                  <div className="portfolioContainer row">
                    {/* <div className=" row"> */}
                    {listItems}

                  </div>

                </div>
                {/* <!-- End: .grid .project-gallery --> */}
              </div>
              {/* <!-- End: .part --> */}
            </div>
            {/* <!-- End: .row --> */}
          </div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={modalStyle}
              className="portfolioModal"
            >
              <Button variant="contained"
                color="error"
                className="buttonCloseModal"
                onClick={handleClose} >
                X
              </Button>
              <div className="container">
                <div className="row mh-portfolio-modal-inner">
                  <div className="col-sm-12">
                    <h2>{modalTitle}</h2>
                    <img
                      className="modal-portfolio-image"
                      src={modalImage} alt="image"
                    />
                    <p>
                      {modalDescription}
                    </p>
                    <div className="mh-about-tag">
                      <ul>
                        {modalTechsIcons}
                      </ul>
                    </div>
                    <a target="_new"
                      href={modalLinkToProject}
                      className="btn btn-fill">Read More</a>
                  </div>
                </div>
              </div>
            </Box>
          </Modal>
          <div className="container">
            <div className="row text-center">
              <div
                className="col-12 col-md-6 col-sm-12 wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.2s">
                {/* <NextPageButton
                linkTo={"https://ntalam.com/commercial-projects"}
                buttonLabel={"More Details"}
              /> */}
              </div>
              <div
                className="col-md-6 col-sm-12 col-12 wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.2s">
                <NextPageButton
                  linkTo={"/skills"}
                  buttonLabel={"Skills"}
                />
              </div>
            </div>
          </div>
        </div>

      </section >
      {/* </div> */}

      <ScriptsPortfolio />
    </>
  )
}
