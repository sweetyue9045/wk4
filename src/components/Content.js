import ABT from "./content/ABT"
import INTRO_T from "./content/INTRO_TAB"
import INTRO_I from "./content/INTRO_INT"
import RECOMMEND from "./content/RECOMMEND"
import OTHERS from "./content/OTHERS"
import AboutJs from "../assets/json/about.json"
import IntroJs from "../assets/json/intro.json"
import { useState } from 'react';


export default function Content() {
    const [tab, settab] = useState(0);

    return (
        <div>
            <div className="ABT">
                <div id="ABT" className="top_title">
                    <div className="top_box top_box_ABT">About Something</div>
                    <div className="top_bottom">
                        <div className="top_tail"></div>
                    </div>
                </div>
                {AboutJs.map(AboutJ => (
                    <ABT key={AboutJ.key} AboutJ={AboutJ} />
                ))}
            </div>
            <div className="INTRO">
                <div id="INTRO" className="top_title">
                    <div className="top_box top_box_INTRO">Introduce attractions</div>
                    <div className="top_bottom_INTRO"></div>
                </div>
                <div className="INTRO_content">
                    <div className="intro_tab">
                        {IntroJs.map((IntroJ,index) => (
                            <INTRO_T key={IntroJ.key} IntroJ={IntroJ} isActive={tab === index}
                            indexPlus={() => {
                                settab(index)
                            }}
                            />
                        ))}
                    </div>
                    {IntroJs.map((IntroJ,index) => (
                        <INTRO_I key={IntroJ.key} IntroJ={IntroJ} isActive={tab === index} />
                    ))}
                </div>
            </div>
            <RECOMMEND />
            <OTHERS />
        </div>
    );
}