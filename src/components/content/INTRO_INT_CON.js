import { Link } from 'react-router-dom';

export default function INTRO_I_C({ introC }) {
    return (
        <div className="content_box">
            <Link to={`/intro/${introC.id}`}>
                <div className="intro_im">
                    <div className="intro_carousel">
                        <img src={introC.im} alt="" />
                    </div>
                </div>
                <div className="intro_content">
                    <div className="intro_title">{introC.title}</div>
                    <div className="intro_text">
                        {
                            introC.BRT ? (
                                <p>➤{introC.BRT}</p>
                            ) : null
                        }
                        {
                            introC.address ? (
                                <p>➤{introC.address}</p>
                            ) : null
                        }
                        {
                            introC.intro ? (
                                <div>
                                    <p dangerouslySetInnerHTML={{ __html: introC.intro }}></p>
                                </div>
                            ) : null
                        }
                    </div>
                </div>
            </Link>
        </div>
    );
}