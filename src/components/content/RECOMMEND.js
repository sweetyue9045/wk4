import View from "../../assets/im/view.jpg";

export default function RECOMMEND() {
    return (
        <div id="RECOMMEND" className="RECOMMEND">
            <div className="massage-im">
                <img src={View} alt="" />
            </div>
            <div className="message">
                <div className="top_title top_title_REC">
                    <div className="top_title_REC_s">
                        <div className="top_box ">Give A Recommendation</div>
                        <div className="top_bottom">
                            <div className="top_tail"></div>
                        </div>
                    </div>
                    <div className="message_text">
                        你知道更多台中好玩的景點,　或是有什麼一定要推薦的最佳景點嗎？<br />留言告訴我，讓更多人知道台中的隱藏景點吧！
                    </div>
                </div>
                <div id="rec_content" className="rec_content">
                    <input type="text" id="username" autocomplete="off" placeholder="您的暱稱 ..." className="text-success" />
                    <input type="text" id="userplace" autocomplete="off" placeholder="推薦地點 ..." className="text-success" />
                    <textarea id="textmessage" autocomplete="off" placeholder="留個言吧 ..."
                        className="text-success"></textarea>
                    <div className="button-group">
                        <button className="btn-success">清除</button>
                        <button disabled="disabled" className="btn-success">送出</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

