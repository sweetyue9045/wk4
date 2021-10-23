export default function Intros({ intro }) {
    return (
        <div className="BACKNAV">
            <div className="content_box">
                <div className="intro_im">
                    <img src={`../${intro.im}`} alt="" />
                </div>
                <div className="intro_content">
                    <div className="intro_title">{intro.title}</div>
                    <div className="intro_text">
                        {
                            intro.BRT ? (
                                <p>➤{intro.BRT}</p>
                            ) : null
                        }
                        {
                            intro.address ? (
                                <p>➤{intro.address}</p>
                            ) : null
                        }{
                            intro.addresss ? (
                                <p>{intro.addresss}</p>
                            ) : null
                        }
                        {
                            intro.time ? (
                                <div>
                                    <p>開放時間：</p>
                                    <p dangerouslySetInnerHTML={{ __html: intro.time }}></p>
                                </div>
                            ) : null
                        }
                    </div>
                    {
                        intro.fb ? (
                            <div className="intro_a">
                                <a href={intro.fb} target="_blank">
                                    Facebook
                                </a>
                            </div>

                        ) : null
                    }
                    {
                        intro.content ? (
                            <div className="intro_mine" dangerouslySetInnerHTML={{ __html: intro.content }}>
                            </div>
                        ) : null
                    }
                </div>
            </div>
        </div>
    );
}