import INTRO_I_C from "./INTRO_INT_CON"


export default function INTRO_I({ IntroJ, isActive = false }) {
    return (
        <div id={IntroJ.name} className={isActive ? 'intro_content_box showbox' : 'intro_content_box'}>
            <div className={IntroJ.class}>
                {IntroJ.contents.map(IntroJc => (
                    <INTRO_I_C key={IntroJc.id} IntroJc={IntroJc} />
                ))}
            </div>
        </div>
    );
}

