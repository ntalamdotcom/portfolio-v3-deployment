export default function EducationItem({
    qualificationName, institutionName,
    datesStudy, certificationDescription,
    linkInstitution
}) {
    return <>
        <div className="mh-education-item dark-bg wow fadeInUp"
            data-wow-duration="0.8s"
            data-wow-delay="0.3s">
            <h4>{qualificationName}<a href={linkInstitution}>{institutionName}</a></h4>
            <div className="mh-eduyear">{datesStudy}</div>
            <p>{certificationDescription}</p>
        </div>
    </>
}