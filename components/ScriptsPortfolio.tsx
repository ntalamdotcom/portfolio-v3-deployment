/* eslint-disable @next/next/no-sync-scripts */
// import Script from "next/script";

export default function ScriptsPortfolio() {
  return <>

    <script type="text/javascript" src="assets/plugins/js/jquery.min.js" />
    {/* <!-- popper --> */}
    <script src="assets/plugins/js/popper.min.js" />
    {/* <!-- bootstrap --> */}
    <script src="assets/plugins/js/bootstrap.min.js" />
    {/* <!-- owl carousel --> */}
    <script src="assets/plugins/js/owl.carousel.js" />
    {/* <!-- validator --> */}
    <script src="assets/plugins/js/validator.min.js" />
    {/* <!-- wow --> */}
    <script src="assets/plugins/js/wow.min.js" />
    {/* <!-- mixin js--> */}
    <script src="assets/plugins/js/jquery.mixitup.min.js" />
    {/* <!-- circle progress--> */}
    <script src="assets/plugins/js/circle-progress.js" />
    {/* <!-- jquery nav --> */}
    <script src="assets/plugins/js/jquery.nav.js" />
    {/* <!-- Fancybox js-->/ */}
    <script src="assets/plugins/js/jquery.fancybox.min.js" />
    {/* <!-- Map api -->
    <script
      src="http://maps.googleapis.com/maps/api/js?v=3.exp&amp;key=AIzaSyCRP2E3BhaVKYs7BvNytBNumU0MBmjhhxc"/>
    <!-- isotope js--> */}
    <script src="assets/plugins/js/isotope.pkgd.js" />
    <script src="assets/plugins/js/packery-mode.pkgd.js" />
    {/* <!-- Custom Scripts--> */}
    {/* <script src="assets/js/map-init.js" /> */}
    <script src="assets/js/custom-scripts.js" />


    {/* <!-- ****************
    After neccessary customization/modification, Please minify
    JavaScript/jQuery according to http://browserdiet.com/en/ for better performance
    **************** -->
    <!-- STYLE SWITCH STYLESHEET ONLY FOR DEMO --> */}
    <link rel="stylesheet" href="demo/demo.css" />
    <script src="demo/styleswitcher.js" />
    <script src="demo/demo.js" />
    <script src="assets/js/portfolio-init.js" />
    {/* <div className="demo-style-switch" id="switch-style">
        <a id="toggle-switcher" className="switch-button"><i className="fa fa-snowflake-o fa-spin"></i></a>
        <div className="switched-options">
          <ul>
            <li className="mh-demo-styles">
              <h4>Style One </h4>
              <ul>
                <li>
                  <a href="home-one.html">
                    <img src="assets/images/h1w.png" alt="" className="img-fluid" />
                  </a>
                </li>
                <li>
                  <a href="home-one-w.html">
                    <img src="assets/images/h1.png" alt="" className="img-fluid" />
                  </a>
                </li>
              </ul>
            </li>
            <li className="mh-demo-styles">
              <h4>Style Two </h4>
              <ul>
                <li>
                  <a href="home-two.html">
                    <img src="assets/images/h2w.png" alt="" className="img-fluid" /></a>
                </li>
                <li>
                  <a href="home-two-w.html">
                    <img src="assets/images/h2.png" alt=""
                      className="img-fluid" /></a>
                </li>
              </ul>
            </li>

            <li className="mh-demo-styles">
              <h4>RTl</h4>
              <ul>
                <li>
                  <a href="home-rtl.html">
                    <img src="assets/images/h3w.png" alt=""
                      className="img-fluid" /></a>
                </li>
                <li>
                  <a href="home-rtl-w.html">
                    <img src="assets/images/h3.png" alt="" className="img-fluid" />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="config-title">
            Colors :
          </div>
          <ul className="styles">

            <li><a href="#"
              onClick={() => { setActiveStyleSheet('blue'); return false; }} title="Blue">
              <div className="blue"></div>
            </a>
            </li>
            <li><a href="#"
              onClick={() => { setActiveStyleSheet('purple'); return false; }} title="Purple">
              <div className="purple"></div>
            </a>
            </li>
            <li><a href="#"
              onClick={() => { setActiveStyleSheet('blue-munsell'); return false; }} title="Blue Munsell">
              <div className="blue-munsell"></div>
            </a>
            </li>
            <li><a href="#" onClick={() => { setActiveStyleSheet('orange'); return false; }} title="Orange">
              <div className="orange"></div>
            </a>
            </li>
            <li><a href="#" onClick={() => { setActiveStyleSheet('slate'); return false; }} title="Slate">
              <div className="slate"></div>
            </a>
            </li>
            <li><a href="#" onClick={() => { setActiveStyleSheet('green'); return false; }} title="Green">
              <div className="green"></div>
            </a>
            </li>
            <li><a href="#" onClick={() => { setActiveStyleSheet('yellow'); return false; }} title="Yellow">
              <div className="yellow"></div>
            </a>
            </li>
            <li><a href="#" onClick={() => { setActiveStyleSheet('red'); return false; }} title="Red">
              <div className="red"></div>
            </a>
            </li>
          </ul>
        </div>
      </div> */}
  </>
}