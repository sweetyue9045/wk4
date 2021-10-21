export default function INTRO_I_C({ IntroJc }) {
    return (
        <div className="content_box">
            <div className="intro_im">
                <div className="intro_carousel">
                    <img src={IntroJc.im} alt="" />
                </div>
            </div>
            <div className="intro_content">
                <div className="intro_title">{IntroJc.title}</div>
                <div className="intro_text">
                    {
                        IntroJc.BRT ? (
                            <p>➤{IntroJc.BRT}</p>
                        ) : null
                    }
                    {
                        IntroJc.address ? (
                            <p>➤{IntroJc.address}</p>
                        ) : null
                    }
                    {
                        IntroJc.time ? (
                            <div>
                                <p>開放時間：</p>
                                <p dangerouslySetInnerHTML={{ __html: IntroJc.time }}></p>
                            </div>
                        ) : null
                    }
                    {
                        IntroJc.intro ? (
                            <div>
                                <p dangerouslySetInnerHTML={{ __html: IntroJc.intro }}></p>
                            </div>
                        ) : null
                    }
                </div>
                {
                    IntroJc.fb ? (
                        <div className="intro_a">
                            <a href={IntroJc.fb} target="_blank">
                                <i className="fas fa-globe fa-1x"></i>
                            </a>
                        </div>
                    ) : null
                }
                {
                    IntroJc.content ? (
                        <div className="intro_mine" dangerouslySetInnerHTML={{ __html: IntroJc.content }}>
                        </div>
                    ) : null
                }

            </div>
        </div>
    );
}