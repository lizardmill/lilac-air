import './App.css';
import AQITile from './AQITile.jsx';
import PMTile from './PMTile.jsx';
import ParticlesPerDecileter from './ParticlesPerDecileter.jsx';


function App() {


  return (
    <div className="App">
        <div className="container">
            <div className="greeting">
                <p>Hello, Timothy.</p>
            </div>
            <div className="temperature">
                <p>Current Temperature is: 🌞</p>
            </div>
            <div className="aqi firstAQI">
                <AQITile name="pm2_5_cf_1" />
            </div>
            <div className="aqi secondAQI">
                <AQITile name="pm10_0_cf_1" />
            </div>

            <div className="pmgroup">
                <div className="firstPMSet upper">
                    <p>PM 1.0</p>
                    <PMTile name="pm1_0_cf_1" />
                    <PMTile name="pm1_0_atm" />
                </div>
                <div className="firstPMSet lower">
                    <p>PM 2.5</p>
                    <PMTile name="pm2_5_cf_1" />
                    <PMTile name="pm2_5_atm" />
                </div>
                <div className="secondPMSet">
                    <PMTile name="pm10_0_cf_1" />
                    <PMTile name="pm10_0_atm" />
                </div>
            </div>

            <div className="ppdgroup">
                <div>
                    <PMTile name="p_0_3_um" />
                </div>
                <div>
                    <PMTile name="p_0_5_um" />
                </div>
                <div>
                    <PMTile name="p_1_0_um" />
                </div>
            </div>

        </div>


    </div>
  );
}

export default App;
