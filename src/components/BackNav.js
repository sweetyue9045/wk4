import { Link } from 'react-router-dom';

export default function BackNav() {
    return (
        <div className="BACKNAV">
        <Link to={`/`} className="backnav">
            <i className="fas fa-chevron-left"></i>
            <i className="fas fa-chevron-left"></i>
            <p>BACK</p>
        </Link>
        </div>
    );
}