export default function INTRO_T({ intro, indexPlus = () => console.error('You passed no action to the component'), isActive = false }) {
    return (
        <li>
            <a className={isActive ? 'tab_title choose' : 'tab_title'} onClick={indexPlus}>
                {intro.name}
            </a>
        </li>
    );
}