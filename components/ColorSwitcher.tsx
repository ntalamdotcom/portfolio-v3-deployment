export default function ColorSwitcher() {
    return <>
        <div
            style={{ display: "none" }}
            className="demo-style-switch" id="switch-style">
            <a id="toggle-switcher"

                className="switch-button">
                <i className="fa fa-snowflake-o fa-spin"></i></a>
            <div className="switched-options">
                <ul>
                    <li className="mh-demo-styles">
                        <h4>Style One </h4>
                        <ul>
                            <li>
                                <a href="home-one.html">
                                    <img src="assets/images/h1w.png" alt=""
                                        className="img-fluid" /></a>
                            </li>
                            <li>
                                <a href="home-one-w.html">
                                    <img src="assets/images/h1.png" alt=""
                                        className="img-fluid" /></a>
                            </li>
                        </ul>
                    </li>
                    <li className="mh-demo-styles">
                        <h4>Style Two </h4>
                        <ul>
                            <li>
                                <a href="home-two.html">
                                    <img src="assets/images/h2w.png" alt=""
                                        className="img-fluid" /></a>
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
                                    <img src="assets/images/h3.png" alt=""
                                        className="img-fluid" /></a>
                            </li>
                        </ul>
                    </li>
                </ul>
                {/* <div className="config-title">
                    Colors :
                </div>
                <ul className="styles">
                    <li>
                        <a href="#" onclick="setActiveStyleSheet('blue'); return false;" title="Blue">
                        <div className="blue"></div>
                    </a>
                    </li>
                    <li><a href="#" onclick="setActiveStyleSheet('purple'); return false;" title="Purple">
                        <div className="purple"></div>
                    </a>
                    </li>
                    <li><a href="#" onclick="setActiveStyleSheet('blue-munsell'); return false;" title="Blue Munsell">
                        <div className="blue-munsell"></div>
                    </a>
                    </li>
                    <li><a href="#" onclick="setActiveStyleSheet('orange'); return false;" title="Orange">
                        <div className="orange"></div>
                    </a>
                    </li>
                    <li><a href="#" onclick="setActiveStyleSheet('slate'); return false;" title="Slate">
                        <div className="slate"></div>
                    </a>
                    </li>
                    <li><a href="#" onclick="setActiveStyleSheet('green'); return false;" title="Green">
                        <div className="green"></div>
                    </a>
                    </li>
                    <li><a href="#" onclick="setActiveStyleSheet('yellow'); return false;" title="Yellow">
                        <div className="yellow"></div>
                    </a>
                    </li>
                    <li><a href="#" onclick="setActiveStyleSheet('red'); return false;" title="Red">
                        <div className="red"></div>
                    </a>
                    </li>
                </ul> */}
            </div>
        </div >
    </>
}