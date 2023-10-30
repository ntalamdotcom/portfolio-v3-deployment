export default function WorkExperienceItem({
    companyName,
    roleName, workPeriod,
    dutiesList, companyUrl,detailsURL
}) {

    const renderList = []
    dutiesList.forEach(element => {
        renderList.push(
            <li><i className="fa fa-circle"></i>{element}</li>
        )
    });


    return <>
        <div className="mh-work-item dark-bg wow fadeInUp" data-wow-duration="0.8s"
            data-wow-delay="0.4s">
            <h4>{roleName} <a href={companyUrl}>{companyName}</a></h4>
            <div className="mh-eduyear">{workPeriod}</div>
            <span>Responsibility :</span>
            <ul className="work-responsibility">
                {renderList}
            </ul>
            <a target="_new" href={detailsURL} >Read More</a>
        </div>
    </>
}