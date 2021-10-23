export default function Intros({ intro }) {
    return (
        <div className="content_box">
            <div className="intro_im">
                <div className="intro_carousel">
                    <img src={`../${intro.im}`} alt="" />
                </div>
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
                    }
                    {
                        intro.time ? (
                            <div>
                                <p>開放時間：</p>
                                <p dangerouslySetInnerHTML={{ __html: intro.time }}></p>
                            </div>
                        ) : null
                    }
                    {
                        intro.intro ? (
                            <div>
                                <p dangerouslySetInnerHTML={{ __html: intro.intro }}></p>
                            </div>
                        ) : null
                    }
                </div>
                {
                    intro.fb ? (
                        <div className="intro_a">
                            <a href={intro.fb} target="_blank">
                                <i className="fas fa-globe fa-1x"></i>
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
    );
}