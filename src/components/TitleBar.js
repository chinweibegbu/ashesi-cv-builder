import '../styles/TitleBar.css';

function TitleBar({ location }) {
    if (location === "landing-page") {
        return (
            <div className="row-flex d-flex title-bar-landing p-2 bordered">
                <img className='logo-img' src="images/ashesi-logo-black.png" alt="Ashesi University Logo" />
                <p className='logo-txt'>Ashesi CV Builder</p>
            </div>
        );
    } else if (location === "main-body") {
        return (
            <div className="row-flex d-flex title-bar-main bordered">
                <img className='logo-img' src="images/ashesi-logo-white.png" alt="Ashesi University Logo" />
                <p className='logo-txt text-white'>Ashesi CV Builder</p>
            </div>
        );
    }
}

export default TitleBar;