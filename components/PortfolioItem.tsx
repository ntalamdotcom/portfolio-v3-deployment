import { Button } from "@mui/material";
import { AvailableTechnologies } from "../pages/about";

export default function PortfolioItem({
    imagePath,
    imageAlt,
    title,
    subTitle,
    description,
    categories,
    handleOpenfunction,
    setModalTitle,
    setModalDescription,
    linkToProject,
    setModalLinkToProject,
    setModalImage,
    technologies,
    setModalTechIcons,
    keyItem,
}) {
    const itemsList = []
    var techCount = 0
    technologies.forEach(ele => {
        AvailableTechnologies.forEach(eleAval => {
            if (eleAval.imageName === ele) {
                techCount++
                itemsList.push(
                    <li
                        id={keyItem + techCount}
                        key={keyItem + techCount}
                    >
                        <img
                            id={'img-' + keyItem + techCount}
                            key={'img-' + keyItem + techCount}
                            alt={ele.label}
                            src={"assets/images/" + ele + "-64.png "} />
                    </li>
                )
            }
        });
    });
    var cat = categories
    if (Array.isArray(categories)) {
        cat = categories[0]
    }


    return <>
        <div
            className={"grid-item col-md-4 col-sm-6 col-xs-12 " + cat}>
            <figure>
                <Button
                    onClick={() => {
                        setModalTitle(title)
                        setModalDescription(description || subTitle)
                        setModalLinkToProject(linkToProject)
                        setModalImage(imagePath)
                        setModalTechIcons(itemsList);
                        handleOpenfunction()
                    }}
                    className="buttonPortfolioItem" >
                    <img
                        src={imagePath}
                        alt={imageAlt} />
                    <figcaption className="fig-caption">
                        <i className="fa fa-search"></i>
                        <h5 className="title">{title}</h5>
                        <span className="sub-title">{subTitle}</span>
                    </figcaption>
                </Button>
            </figure>
        </div>
    </>
}