import ABT from "./content/ABT"
import INTRO from "./content/INTRO"
import RECOMMEND from "./content/RECOMMEND"
import OTHERS from "./content/OTHERS"

export default function Content() {
    return (
        <content>
            <ABT />
            <INTRO />
            <RECOMMEND />
            <OTHERS />
        </content>
    );
}