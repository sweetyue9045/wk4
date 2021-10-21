import A1_0 from "../../assets/im/A1-0.jpg";
import A2_0 from "../../assets/im/A2-0.jpg";
import A3_0 from "../../assets/im/A3-0.jpg";
import A4_0 from "../../assets/im/A4-0.jpg";
import A5_0 from "../../assets/im/A5-0.jpg";
import A6_0 from "../../assets/im/A6-0.jpg";
import B1 from "../../assets/im/B1.jpg";
import B2_0 from "../../assets/im/B2-0.jpg";
import B3_0 from "../../assets/im/B3-0.jpg";
import B4 from "../../assets/im/B4.jpg";
import B5 from "../../assets/im/B5.jpg";
import C1 from "../../assets/im/C1.jpg";
import C2 from "../../assets/im/C2.jpg";
import C3 from "../../assets/im/C3.jpg";
import C4 from "../../assets/im/C4.jpg";
import C5 from "../../assets/im/C5.jpg";
import C6 from "../../assets/im/C6.jpg";
import C7 from "../../assets/im/C7.jpg";
import C8 from "../../assets/im/C8.jpg";



export default function INTRO() {
    return (
        <div className="INTRO">
            <div id="INTRO" className="top_title">
                <div className="top_box top_box_INTRO">Introduce attractions</div>
                <div className="top_bottom_INTRO"></div>
            </div>
            <div className="INTRO_content">
                <div className="intro_tab">
                    <li><a for="key" className="tab_title choose">PHOTO HOT SPOT</a></li>
                    <li><a for="key" className="tab_title">BUILDING</a></li>
                    <li><a for="key" className="tab_title">FOOD</a></li>
                </div>
                <div id="PHOTO HOT SPOT" className="intro_content_box showbox">
                    <div id="outbox1">
                        <div id="content_box">
                            <div className="intro_im">
                                <div className="intro_carousel">
                                    <img src={A1_0} alt="" />
                                </div>
                                <div className="chevron">
                                    <button><i className="fas fa-chevron-left"></i></button>
                                    <button><i className="fas fa-chevron-right"></i></button>
                                </div>
                                <div className="carousel-indicators">
                                    <div className="carousel-dots dotschoose"></div>
                                    <div className="carousel-dots"></div>
                                    <div className="carousel-dots"></div>
                                </div>
                            </div>
                            <div className="intro_content">
                                <div className="intro_title">20號倉庫藝術特區</div>
                                <div className="intro_text">
                                    <p>➤臺中火車站站</p>
                                    <p>➤台中市中區復興路四段37巷6-1號</p>
                                    <p>開放時間：</p>
                                    <p>週一　　　　公休<br />週二至週日　09：30－18：00</p>
                                </div>
                                <div className="intro_mine">
                                    20號倉庫興建於1917年，於1995年納入二級古蹟，為臺中地區重要的人文環境和觀光資源。<br />
                                    最近因為火車站在施工，所以可以拍照的範圍變小了TT
                                </div>
                            </div>
                        </div>
                        <div id="content_box">
                            <div className="intro_im">
                                <div className="intro_carousel">
                                    <img src={A2_0} alt="" />
                                </div>
                                <div className="chevron">
                                    <button><i className="fas fa-chevron-left"></i></button>
                                    <button><i className="fas fa-chevron-right"></i></button>
                                </div>
                                <div className="carousel-indicators">
                                    <div className="carousel-dots dotschoose"></div>
                                    <div className="carousel-dots"></div>
                                    <div className="carousel-dots"></div>
                                    <div className="carousel-dots"></div>
                                </div>
                            </div>
                            <div className="intro_content">
                                <div className="intro_title">柳川水岸</div>
                                <div className="intro_text">
                                    <p>➤仁愛醫院站</p>
                                    <p>➤台中市中區柳川西路三段</p>
                                    <p>開放時間：</p>
                                    <p>全天開放</p>
                                </div>
                            </div>
                        </div>
                        <div id="content_box">
                            <div className="intro_im">
                                <div className="intro_carousel">
                                    <img src={A3_0} alt="" />
                                </div>
                                <div className="chevron">
                                    <button><i className="fas fa-chevron-left"></i></button>
                                    <button><i className="fas fa-chevron-right"></i></button>
                                </div>
                                <div className="carousel-indicators">
                                    <div className="carousel-dots dotschoose"></div>
                                    <div className="carousel-dots"></div>
                                </div>
                            </div>
                            <div className="intro_content">
                                <div className="intro_title">草悟道</div>
                                <div className="intro_text">
                                    <p>➤科博館站</p>
                                    <p>➤台中市西區向上北路</p>
                                    <p>開放時間：</p>
                                    <p>全天開放</p>
                                </div>
                            </div>
                        </div>
                        <div id="content_box">
                            <div className="intro_im">
                                <div className="intro_carousel">
                                    <img src={A4_0} alt="" />
                                </div>
                                <div className="chevron"><button><i className="fas fa-chevron-left"></i></button>
                                    <button><i className="fas fa-chevron-right"></i></button>
                                </div>
                                <div className="carousel-indicators">
                                    <div className="carousel-dots dotschoose"></div>
                                    <div className="carousel-dots"></div>
                                    <div className="carousel-dots"></div>
                                    <div className="carousel-dots"></div>
                                </div>
                            </div>
                            <div className="intro_content">
                                <div className="intro_title">Adidas愛迪達綠園道店</div>
                                <div className="intro_text">
                                    <p>➤科博館站</p>
                                    <p>➤台中市西區中興街219號</p>
                                    <p>開放時間：</p>
                                    <p>週一至週五　11:00－22:00<br />週六至週日　10: 30－22: 00</p>
                                </div>
                                <div className="intro_mine">
                                    一樓直直走到底，有一個顛倒籃球場，超大顆半圓型籃球，可以坐在上面上拍照，同樣在一樓，有一個從店裡延伸出來的跑道，也是經典的必拍場景之一。<br />
                                    走到2樓的戶外看台，有一個水藍色愛迪達三片葉空中花園，整個空中花園都是水藍色系，到處都很好拍照！
                                </div>
                            </div>
                        </div>
                        <div id="content_box">
                            <div className="intro_im">
                                <div className="intro_carousel">
                                    <img src={A5_0} alt="" />
                                </div>
                                <div className="chevron">
                                    <button><i className="fas fa-chevron-left"></i></button>
                                    <button><i className="fas fa-chevron-right"></i></button>
                                </div>
                                <div className="carousel-indicators">
                                    <div className="carousel-dots dotschoose"></div>
                                    <div className="carousel-dots"></div>
                                    <div className="carousel-dots"></div>
                                    <div className="carousel-dots"></div>
                                </div>
                            </div>
                            <div className="intro_content">
                                <div className="intro_title">勤美美術館</div>
                                <div className="intro_text">
                                    <p>➤科博館站</p>
                                    <p>➤台中市西區館前路71號</p>
                                    <p>開放時間：</p>
                                    <p>週一至週二　休館<br />週三至週日　14：00－19：30<br />(開放時間依各展期調整)</p>
                                </div>
                                <div className="intro_mine">
                                    每個展覽活動展期不同，所以可能每次去都不一樣喔！<br />
                                    務必查好展期和天氣預報！不然很可能撲空喔！</div>
                            </div>
                        </div>
                        <div id="content_box">
                            <div className="intro_im">
                                <div className="intro_carousel">
                                    <img src={A6_0} alt="" />
                                </div>
                                <div className="chevron">
                                    <button><i className="fas fa-chevron-left"></i></button>
                                    <button><i className="fas fa-chevron-right"></i></button>
                                </div>
                                <div className="carousel-indicators">
                                    <div className="carousel-dots dotschoose"></div>
                                    <div className="carousel-dots"></div>
                                    <div className="carousel-dots"></div>
                                    <div className="carousel-dots"></div>
                                    <div className="carousel-dots"></div>
                                </div>
                            </div>
                            <div className="intro_content">
                                <div className="intro_title">UNO市集</div>
                                <div className="intro_text">
                                    <p>➤新光 / 遠百站</p>
                                    <p>➤台中市西屯區台灣大道三段251號旁(台中大遠百旁)</p>
                                    <p>開放時間：</p>
                                    <p>週一至週四　14：00－23：00<br />週五至週日　11：00－23：00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="BUILDING" className="intro_content_box">
                    <div id="outbox2">
                        <div id="content_box">
                            <div className="intro_im">
                                <div className="intro_carousel">
                                    <img src={B1} alt="" />
                                </div>
                            </div>
                            <div className="intro_content">
                                <div className="intro_title">中友百貨－主題廁所</div>
                                <div className="intro_text">
                                    <p>➤中友百貨站</p>
                                    <p>➤台中市北區三民路三段161號</p>
                                    <p>
                                        中友百貨是臺灣臺中市的一家大型百貨公司，於1992年4月30日開業。中友百貨所在之建築為「世紀21廣場」大樓，共分為A、B、C三館，各館間於各樓層以空橋相互連通，今中友百貨已為臺中市營運時間最久的百貨公司，並且為臺灣中部核心城市臺中市年營業額前三大的百貨公司之一。<br />
                                        中友百貨自2003年起陸續改裝各樓層廁所為主題廁所，屢屢被媒體報導其特別之處，亦曾獲得亞洲時代雜誌報導、英國公開旅遊網站票選為世界十大精彩廁所，目前共擁有15間不同的主題廁所。
                                    </p>
                                </div>
                                <div className="intro_mine">
                                    由於中友百貨改裝，很有名的親子廁所綠野仙蹤跟海底總動員已經看不到了喔！<br />
                                    A棟6樓是男廁，小編進不去，有興趣的朋友可以自己去看一看喔！</div>
                            </div>
                        </div>
                        <div id="content_box">
                            <div className="intro_im">
                                <div className="intro_carousel">
                                    <img src={B2_0} alt="" />
                                </div>
                                <div className="chevron">
                                    <button><i className="fas fa-chevron-left"></i></button>
                                    <button><i className="fas fa-chevron-right"></i></button>
                                </div>
                                <div className="carousel-indicators">
                                    <div className="carousel-dots dotschoose"></div>
                                    <div className="carousel-dots"></div>
                                </div>
                            </div>
                            <div className="intro_content">
                                <div className="intro_title">臺中火車站(舊站)</div>
                                <div className="intro_text">
                                    <p>➤臺中火車站站</p>
                                    <p>➤台中市中區台灣大道一段1號</p>
                                    <p>
                                        臺中火車站為中部地區第一大站，位居臺灣西部鐵路縱貫線的中心。第三代臺中火車站（稱作新站）在2016年10月16日正式通車，自此開始各級列車切換行駛於高架軌道，位於地面的平交道與地下道將陸續拆除或填平。<br />
                                        臺中火車站舊站建於明治時代，於1906年通車，至2016年10月15日臺中鐵路高架化通車前所使用的鐵路車站，現今的火車站樣貌為1917年改建，巴洛克式的建築搭配山牆式設計，屋頂則由青銅片拼成，是全臺碩存最完整的火車站之一，也是二級古蹟（今為國定古蹟）。未來舊站站體、月臺與1.6公里的原鐵軌駁坎將原地保存，並結合周圍相關文化資產轉型為文化設施。
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div id="content_box">
                            <div className="intro_im">
                                <div className="intro_carousel">
                                    <img src={B3_0} alt="" />
                                </div>
                                <div className="chevron">
                                    <button><i className="fas fa-chevron-left"></i></button>
                                    <button><i className="fas fa-chevron-right"></i></button>
                                </div>
                                <div className="carousel-indicators">
                                    <div className="carousel-dots dotschoose"></div>
                                    <div className="carousel-dots"></div>
                                </div>
                            </div>
                            <div className="intro_content">
                                <div className="intro_title">勤美誠品</div>
                                <div className="intro_text">
                                    <p>➤科博館站</p>
                                    <p>➤台中市西區公益路68號</p>
                                    <p>
                                        勤美誠品綠園道是位在西區公益路與草悟道旁的購物商場。由知名建築師將大樓重新改裝設計，原本這棟建築物本是半廢棄的停車場大樓，在勤美與誠品團隊接手之後，為了讓這棟建物能與周遭的綠意融合，堅守尊重自然的理念，在結合數百位專家克服萬難之後，決定讓四周的綠意往牆面上延伸，打造一座讓植栽與建築共生的都市立體花園。<br />
                                        這是台灣第一座大型植生牆，外牆上總共有12萬顆植栽自然生長，配置了3公里長的水路管線，定時提供水份和養份，這些植栽每天能吸收200公斤的二氧化碳，釋放150公斤的氧氣，在夏天還能有降溫節電的效果。<br />
                                        除了建築外觀之外，為了打造一個充滿陽光、空氣、水的綠色購物空間，不惜打掉了購物中心正中央的精華地區、創造挑空5層樓、高達20公尺的室內植生牆，並精心地設計了水循環鏡面水池，架設水中舞台作為文化創意活動的表演場地。讓勤美誠品綠園道成為自然人文新地標，不但榮獲2009國家卓越建設，更代表台灣榮獲素有不動產屆奧斯卡獎之稱的「2010年全球卓越建築獎」。
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div id="content_box">
                            <div className="intro_im">
                                <div className="intro_carousel">
                                    <img src={B4} alt="" />
                                </div>
                            </div>
                            <div className="intro_content">
                                <div className="intro_title">國家歌劇院</div>
                                <div className="intro_text">
                                    <p>➤新光 / 遠百站</p>
                                    <p>➤台中市西屯區惠來路二段101號</p>
                                    <p>
                                        國家歌劇院位於臺中市西屯區七期重劃區，是一大型公有展演空間，由曾獲普立茲克獎的日本建築師伊東豊雄設計。臺中國家歌劇院得天獨厚，在這完美建築之內，有三座專業劇場以及一個多功能空間「角落沙龍」；如果再加上藍天白雲下的廣場、戶外劇場、與屋頂的空中花園，歌劇院可說從裡到外、從地面到屋頂，都是魅力的舞台。<br />
                                        臺中國家歌劇院造型前衛，以「美聲涵洞」概念，採用曲牆、孔洞與管狀等別具一格的設計，全棟共有58面曲牆，每面曲牆有1372片小係數，每一塊都要量身訂作，無法大規模量產，是一項必需精密計算的浩大工程。整棟建築完全沒有樑柱支撐，也無一處為90度牆面，顛覆了一般建築物的概念。另外國家歌劇院有一處綠地公園，就連公園裡水溝也延伸至建築裡，打破了室內與室外的疆界。
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div id="content_box">
                            <div className="intro_im">
                                <div className="intro_carousel">
                                    <img src={B5} alt="" />
                                </div>
                            </div>
                            <div className="intro_content">
                                <div className="intro_title">秋紅谷</div>
                                <div className="intro_text">
                                    <p>➤秋紅谷站</p>
                                    <p>➤台中市西屯區朝富路30號</p>
                                    <p>
                                        位於臺灣大道二段、朝富路口，被稱之為「都市之肺」的秋紅谷廣場，不論甚麼時節，漫步在秋紅谷廣場都是個賞心悅目的享受！位於臺中市臺灣大道旁的秋紅谷廣場，是臺中地區特有的凹型市民休閒綠地，占地3公頃多的秋紅谷公園，擁有湖泊、紅樹、綠草坪、觀景橋，相當適合散步、約會、運動，白天有舒服的綠意；夜晚有著精采萬變的不夜燈火。<br />
                                        秋紅谷廣場所有的設計與考量都是以人本、綠能與滯洪為最大考量，不僅種植植物所需的灌溉水是以湖水供應，連回填所需用的土壤也是與水利署協調利用大里溪疏濬的土壤，成為全臺首座「下凹式」的生態公園；秋紅谷廣場的設立，是希望讓市民的生活更感輕鬆、從容，同時兼具景觀、生態、滯洪、排水與調節空氣品質等等的功能。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="FOOD" className="intro_content_box">
                    <div id="outbox1">
                        <div id="content_box">
                            <div className="intro_im">
                                <div className="intro_carousel">
                                    <img src={C1} alt="" />
                                </div>
                            </div>
                            <div className="intro_content">
                                <div className="intro_title">I PLAZA愛廣場</div>
                                <div className="intro_text">
                                    <p>
                                        台中市北區三民路三段94號<br />
                                        營業時間：週一至週日<br />
                                        11：00－19：00
                                    </p>
                                </div>
                                <div className="intro_a">
                                    <a href="https://www.facebook.com/twiplaza/" target="_blank">
                                        <i className="fas fa-globe fa-1x"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div id="content_box">
                            <div className="intro_im">
                                <div className="intro_carousel">
                                    <img src={C2} alt="" />
                                </div>
                            </div>
                            <div className="intro_content">
                                <div className="intro_title">Q弟紅豆餅－一中店</div>
                                <div className="intro_text">
                                    <p>
                                        台中市北區一中街96、98號<br />
                                        營業時間：週一至週日<br />
                                        11：00－23：00
                                    </p>
                                </div>
                                <div className="intro_a">
                                    <a href="https://www.facebook.com/Q323727027/" target="_blank">
                                        <i className="fas fa-globe fa-1x"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div id="content_box">
                            <div className="intro_im">
                                <div className="intro_carousel">
                                    <img src={C3} alt="" />
                                </div>
                            </div>
                            <div className="intro_content">
                                <div className="intro_title">阿月紅茶冰</div>
                                <div className="intro_text">
                                    <p>
                                        台中市北區一中街96號<br />
                                        營業時間：週一至週日<br />
                                        10：30－23：30
                                    </p>
                                </div>
                                <div className="intro_a">
                                    <a href="https://www.facebook.com/icedblacktea/" target="_blank">
                                        <i className="fas fa-globe fa-1x"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div id="content_box">
                            <div className="intro_im">
                                <div className="intro_carousel">
                                    <img src={C4} alt="" />
                                </div>
                            </div>
                            <div className="intro_content">
                                <div className="intro_title">一中豪大雞排</div>
                                <div className="intro_text">
                                    <p>
                                        台中市北區一中街49號<br />
                                        營業時間：週一至週日<br />
                                        12：00－22：00
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div id="content_box">
                            <div className="intro_im">
                                <div className="intro_carousel">
                                    <img src={C5} alt="" />
                                </div>
                            </div>
                            <div className="intro_content">
                                <div className="intro_title">一中豐仁冰</div>
                                <div className="intro_text">
                                    <p>
                                        台中市北區育才街3巷4-6號<br />
                                        營業時間：週一至週日<br />
                                        10：00－22：30
                                    </p>
                                </div>
                                <div className="intro_a">
                                    <a href="https://www.facebook.com/fengren1946/" target="_blank">
                                        <i className="fas fa-globe fa-1x"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div id="content_box">
                            <div className="intro_im">
                                <div className="intro_carousel">
                                    <img src={C6} alt="" />
                                </div>
                            </div>
                            <div className="intro_content">
                                <div className="intro_title">福州包</div>
                                <div className="intro_text">
                                    <p>
                                        台中市北區育才街6巷巷口<br />
                                        營業時間：週一至週日<br />
                                        下午至賣完
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div id="content_box">
                            <div className="intro_im">
                                <div className="intro_carousel">
                                    <img src={C7} alt="" />
                                </div>
                            </div>
                            <div className="intro_content">
                                <div className="intro_title">一中8兩碳烤雞排</div>
                                <div className="intro_text">
                                    <p>
                                        台中市北區一中街（水利大樓前）<br />營
                                        業時間：週一至週日<br />
                                        11：00－23：00
                                    </p>
                                </div>
                                <div className="intro_a">
                                    <a href="http://0923177364.tw.tranews.com/" target="_blank">
                                        <i className="fas fa-globe fa-1x"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div id="content_box">
                            <div className="intro_im">
                                <div className="intro_carousel">
                                    <img src={C8} alt="" />
                                </div>
                            </div>
                            <div className="intro_content">
                                <div className="intro_title">一中街鯛魚燒霜淇淋</div>
                                <div className="intro_text">
                                    <p>
                                        台中市北區育才街19-1號<br />
                                        營業時間：週一至週日<br />
                                        14：00－21：30
                                    </p>
                                </div>
                                <div className="intro_a">
                                    <a href="https://www.facebook.com/eaticefish/" target="_blank">
                                        <i className="fas fa-globe fa-1x"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

