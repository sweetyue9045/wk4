export default function INTRO_T({ IntroJ, indexPlus = () => console.error('You passed no action to the component'), isActive = false }) {
    return (
        <li><a className={isActive ? 'tab_title choose' : 'tab_title'}
            onClick={indexPlus}
        >{IntroJ.name}
        </a></li>
    );
}