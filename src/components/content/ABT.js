export default function ABT({ AboutJ }) {
    var IMG = new Array;
    if (AboutJ.im != null) {
        IMG.push(<img key="129xhd" className='imbus' src={AboutJ.im} alt='' />);
    }
    return (
        <div id={AboutJ.id} className="ABT_content">
            <div className="content_title">
                <div className="subtitle">{AboutJ.subtitle}</div>
                <div className="title">{AboutJ.title}</div>
            </div>
            <div className="btm_content" dangerouslySetInnerHTML={{ __html: AboutJ.btm_content }}>
            </div>
           {IMG}
        </div>
    );
}

