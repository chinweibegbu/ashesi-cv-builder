import '../styles/TitleBar.css';

function TitleBar({ location }) {
    if (location === "landing-page") {
        return (
            <div className="row-flex d-flex align-items-center p-2 bordered">
                <img className='logo-img' src="images/ashesi-logo-black.png" alt="Ashesi University Logo" />
                <p className='logo-txt'>Ashesi CV Builder</p>
            </div>
        );
    } else if (location === "main-body") {
        return (
            <div className="row-flex d-flex bg-dark align-items-center p-2 bordered">
                <img className='logo-img' src="images/ashesi-logo-white.png" alt="Ashesi University Logo" />
                <p className='logo-txt text-white'>Ashesi CV Builder</p>
            </div>
        );
    }
}

export default TitleBar;