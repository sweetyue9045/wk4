import INTRO_I_C from "./INTRO_INT_CON"


export default function INTRO_I({ intro, isActive = false }) {
    return (
        <div id={intro.name} className={isActive ? 'intro_content_box showbox' : 'intro_content_box'}>
            <div className={intro.class}>
                {intro.contents.map(introC => (
                    <INTRO_I_C key={introC.id} introC={introC} />
                ))}
            </div>
        </div>
    );
}

