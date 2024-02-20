import RoboSubLogo from './assets/ROBOSUB_Official_Logo.png'

function LandingPage() {

    function start() {
        //start arduino code
    }

    function recievedata() {
        //log out or chart all the data
    }
    
    return(
        <> <div className="page-background">
        <div className="top-bar">
            <img className="logo-img" src={RoboSubLogo} alt="robosub-logo"></img>
            <h1 className="title">Robosub Float Starter</h1>
        </div>
        
        <div className="main-container">
            <h1 id="start-instruction">Press Start for Data Collection</h1>
            <button id="start-btn">START</button>
        </div>
        
        </div> </>
    );
}

export default LandingPage