export default function ABT({ about }) {
    var IMG = new Array;
    if (about.im != null) {
        IMG.push(<img key="129xhd" className='imbus' src={about.im} alt='' />);
    }
    return (
        <div id={about.id} className="ABT_content">
            <div className="content_title">
                <div className="subtitle">{about.subtitle}</div>
                <div className="title">{about.title}</div>
            </div>
            <div className="btm_content" dangerouslySetInnerHTML={{ __html: about.btm_content }}>
            </div>
           {IMG}
        </div>
    );
}

