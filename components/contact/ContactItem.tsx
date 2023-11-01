export default function ContactItem({

    label,
    iconName,
    linkTo,
}) {
    return <>
        <div className="col-sm-12 col-md-6 mh-footer-address">
            <div className="col-sm-12 xs-no-padding">
                <a href={linkTo} target="_new">
                    <div className="mh-address-footer-item media dark-bg shadow-1 wow fadeInUp"
                        data-wow-duration="0.8s" data-wow-delay="0.4s">
                        <div className="each-icon">
                            <i className={"fa " + iconName}></i>
                        </div>
                        <div className="each-info media-body">
                            <h4>{label}</h4>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </>
}