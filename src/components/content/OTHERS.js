import Designer from "../../assets/im/designer.png";
import Painter from "../../assets/im/painter.png";

export default function OTHERS() {
    return (
        <div id="OTHERS" className="OTHERS">
            <div className="person">
                <div className="person_left">
                    <div className="person_top">
                        <span className="person_title">Meang_Yu</span>
                        <span className="person_grade">大學一年級生</span>
                        <br />
                        <span className="person_divide">Designer / Photographer</span>
                    </div>
                    <div className="person_text">
                        這原本是閱讀與寫作課的一份報告，報告內容是要向大家介紹公車路線與其可遊玩景點，現在我將這份報告搖身一變成為一個小網站。
                        <br />
                        希望透過這個小網站，大家能用另一種方法去看完這份報告，也希望大家看完後，會更喜歡台中❤
                    </div>
                </div>
                <div className="person_right">
                    <img src={Designer} alt="" />
                </div>
            </div>
            <div className="person">
                <div className="person_left">
                    <div className="person_top">
                        <span className="person_title">Yu_Zhang</span>
                        <span className="person_grade">大學一年級生</span>
                        <br />
                        <span className="person_divide">Painter</span>
                    </div>
                    <div className="person_text">
                        這位是本網站的繪者，首頁的主要圖樣跟動圖都是出自她手，是一個十分熱愛繪畫的人。
                        <br />
                        除了原本在報告中就使用的圖以外，還友情提供了其他圖樣，喜歡本網站插圖的朋友們，歡迎追蹤關注她的粉絲專業喔！
                        <br />
                    </div>
                    <a href="https://www.facebook.com/albada00/" target="_blank">
                        <i className="fab fa-facebook-square"></i> Albada 艾爾巴達
                    </a>
                </div>
                <div className="person_right">
                    <img src={Painter} alt="" />
                </div>
            </div>
        </div>
    );
}

