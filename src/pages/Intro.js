import BackNav from "../components/BackNav"
import Intros from "../components/Intros"
import Footer from "../components/Footer"
import intros from "../assets/json/intro.json"

function Intro({ match }) {
    const introd = intros.map(
        (intro) => intro.contents
    )
    const introds = new Array;
    for (let indexs = 0; indexs < introd.length; indexs++) {
        introd[indexs].map(
            (intro) => introds.push(intro)
        )
    }
    const intro = introds.find(
        (x) => x.id === match.params.introId
    );
    return (
        <div>
            <BackNav />
            <Intros intro={intro} />
            <Footer />
        </div>
    );
}

export default Intro;