import Cloud1 from "../assets/im/cloud1.png";
import Cloud2 from "../assets/im/cloud2.png";
import Cloud3 from "../assets/im/cloud3.png";
import Cloud4 from "../assets/im/cloud4.png";
import Cloud5 from "../assets/im/cloud5.png";
import Background from "../assets/im/background.png";
import Background2 from "../assets/im/background2.png";
import Top from "../assets/im/top.png";
import Bottom from "../assets/im/bottom.png";
import Van from "../assets/im/van.png";
import Map from "../assets/im/map.png";

export default function Header() {
    return (
        <header id="HOME">
            <div className="im">
                <img className="cl cl1" src={Cloud1} />
                <img className="cl cl2" src={Cloud2} />
                <img className="cl cl3" src={Cloud3} />
                <img className="cl cl4" src={Cloud4} />
                <img className="cl cl5" src={Cloud5} />
                <img className="bg" src={Background} />
                <div className="wheel">
                    <img className="tp" src={Top} />
                    <img className="bt" src={Bottom} />
                </div>
                <img className="bg bg2" src={Background2} />
                <img className="van" src={Van} />
            </div>
            <div className="menu">
                <input className="menu-check" type="checkbox" id="menu-check" />
                <label className="menu-open-button" for="menu-check">
                    <img className="menu-img" src={Map} />
                    <div className="menu-text">Taichung <br />BRT | 303 | BUS</div>
                </label>
                <a className="menu-item menu-item1" href="#HOME">
                    <i className=" fas fa-home" id="itemH"></i></a>
                <a className="menu-item menu-item2" href="#ABT">
                    <i className="fas fa-list" id="itemA"></i></a>
                <a className="menu-item menu-item3" href="#INTRO">
                    <i className="fab fa-pagelines" id="itemI"></i></a>
                <a className="menu-item menu-item4" href="#RECOMMEND">
                    <i className="fas fa-envelope" id="itemC"></i></a>
                <a className="menu-item menu-item5" href="#OTHERS">
                    <i className="fas fa-ellipsis-h" id="itemO"></i></a>
            </div>
        </header>
        );
}