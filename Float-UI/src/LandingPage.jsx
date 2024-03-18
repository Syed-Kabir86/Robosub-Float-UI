import RoboSubLogo from './assets/ROBOSUB_Official_Logo.png'

import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";

import psiData from "./data/psiData.json";

defaults.maintainAspectRatio = true;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

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

            <div className="graph-container">
            <Line data={{
                labels: psiData.map((data) => data.label),
                datasets: [
                    {
                    label: "PSI",
                    data: psiData.map((data) => data.psi),
                    backgroundColor: "#FF0000",
                    borderColor: "#FF0000",
                    },
                ],
            }}
            options={{
                plugins: {
                    title: {
                        text: "Psi Measured over Time in Seconds"
                    },
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: "PSI(pounds per square inch)"
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: "Time of Collection in Seconds(s)"
                        }
                    }
                }
            }}
            />
            </div>
        </div>
        
        </div> </>
    );
}

export default LandingPage