export default function FeaturedPost({
    title, linkTo, postDate,
    description, featuredImage,
    dateLink
}) {
    return <>
        <div className="col-sm-12 col-md-4">
            <div className="mh-blog-item dark-bg wow fadeInUp"
                data-wow-duration="0.8s" data-wow-delay="0.3s">
                <img src={featuredImage} alt="" className="img-fluid" />
                <div className="blog-inner">
                    <h2><a href={linkTo}>{title}</a></h2>
                    <div className="mh-blog-post-info">
                        <ul>
                            <li><strong>Post On</strong>
                                <a href={dateLink}>{postDate}</a>
                            </li>
                            {/* <li><strong>By</strong><a href="#">ThemeSpiders</a></li> */}
                        </ul>
                    </div>
                    <p>{description}</p>
                    <a href={linkTo}>Read More</a>
                </div>
            </div>
        </div>
    </>
}