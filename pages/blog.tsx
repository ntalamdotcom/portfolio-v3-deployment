import { useEffect } from "react";
import HeadPortfolio from "../components/HeadPortfolio";
import ScriptsPortfolio from "../components/ScriptsPortfolio";
import FeaturedPost from "../components/blog/FeaturedPost";
import NextPageButton from "../components/NextPageButton";

export default function Home() {

  useEffect(() => {
    // document.body.className = "dark-vertion black-bg";
    // eval("setActiveStyleSheet('red')")
  });

  return (
    <>
      <HeadPortfolio selectedPageName={"blog"} />
      <section className="mh-blog image-bg featured-img-two" id="mh-blog">
        <div className="img-color-overlay">
          <div className="container">
            <div className="row section-separator">
              <div className="col-sm-12 section-title wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
                <h3>Featured Posts</h3>
              </div>

              <FeaturedPost
                title={"MULTIPLE PROVIDERS ENDPOINT NEXTAUTH"}
                linkTo={"https://ntalam.com/2023/08/27/multiple-providers-endpoint-nextauth"}
                dateLink={"https://ntalam.com/2023/08/27/"}
                postDate={"August 27, 2023"}
                description={"I was struggling for a while to understand why after declaring 2 differents CredentialsProviders, my request were redirected to the default NextAuths sign in page. I have found the answer"}
                featuredImage={"https://ntalam.com/wp-content/uploads/2023/08/ntalam_multipass.jpg"} />
              <FeaturedPost
                title={"UNITY AND WORDPRESS"}
                linkTo={"https://ntalam.com/2020/12/08/unity-and-wordpress"}
                dateLink={"https://ntalam.com/2020/12/08"}
                postDate={"December 8, 2020"}
                description={"I used the WordPress API to create this simple Unity app to show all the posts with the tag 3D Gallery"}
                featuredImage={"https://ntalam.com/wp-content/uploads/2020/12/unityWordpress.jpg"} />
              <FeaturedPost
                title={"NEXTJS + NEXTAUTH + COGNITO CUSTOMIZED LOGIN PAGE"}
                linkTo={"https://ntalam.com/2022/06/29/nextjs-nextauth-cognito-customized-login-page/"}
                dateLink={"https://ntalam.com/2022/06/29"}
                postDate={"June 29, 2022"}
                description={"Using NextJS, Cognito and NextAuth together as a custom login page"}
                featuredImage={"https://ntalam.com/wp-content/uploads/2022/06/ntalam_gendoposecover-1024x576.jpg"} />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row text-center">
            <div
              className="col-12 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.2s">
            </div>
            <div
              className="col-md-6 col-sm-12 col-12 wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.2s">
              <NextPageButton
                linkTo={"/contact"}
                buttonLabel={"Contact me"}
              />
            </div>
          </div>
        </div>
      </section>
      <ScriptsPortfolio></ScriptsPortfolio>
    </>
  )
}
