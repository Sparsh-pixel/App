import "./App.css";
import logo from "../src/assets/logo.png";
import image1 from "../src/assets/1.png";
import image2 from "../src/assets/2.png";
import image3 from "../src/assets/3.png";
import { FaPhone } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";

function App() {
  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="image" />
      </div>
      <div className="main">
        <div className="section">
          <img src={image1} alt="image" />
        </div>
        <div className="details">
          <p>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time. C.R.I.'s energy efficient products are well recognized
            by various Government Institutions, as trustworthy products for
            various projects across the globe to save energy. C.R.I. is the
            highest contributor in the country for the projects of EESL (Energy
            Efficiency Services Limited) to replace the old inefficient pumps
            with 5 Star rated energy efficient smart pumps with IoT enabled
            control panel. Government of India has awarded the "National Energy
            Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director
            of C.R.I. Group received the award from Smt. Sumitra Mahajan,
            Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of
            State. INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE
            COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION
            UNITS OF POWER FOR THE NATION. Valves - Pumps - Pipes - IoT Drives &
            Controllers - Wires & Cables - Solar Systems - Motors C.R.I. FLUID
            SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS CHEMICALS & PROCESS POWER
            WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER &
            PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL &
            REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE &
            RESIDENTIAL
          </p>
          <img src={image2} />
        </div>
      </div>
      <div className="second-section">
        <p>
          INSTALLED OVER 10 LAKHS START RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION
        </p>
        <img src={image3} alt="image" />
      </div>
      <hr />
      <div className="third-section">
        <h4>C.R.I FLUIDS SYSTEM PRODUCTS CATER TO DIVERSE SEGMENT</h4>
        <p>
          CHEMICAL & PROCESS <span>|</span> POWER <span>|</span> WATER & WASTE
          WATER <span>|</span>OIL & GAS <span>|</span> PHARMA <span>|</span>
          SUGARS & DISTILLERIES <span>|</span> PAPER & PULP <span>|</span>{" "}
          MARINE & DEFENCE <span>|</span> METAL & MINING <span>|</span>
          FOOD & BEVERAGES <span>|</span> PETROCHEMICAL & REFINERIES
          <span>|</span> SOLAR BUILIDING <span>|</span> HVAC <span>|</span> FIRE
          FIGHTING <span>|</span> AGRICULTURE & RESIDENTIAL
        </p>
      </div>
      <div className="footer">
        <a href="#">
          <FaPhone className="icons" /> Toll-Free 1800 200 1234
        </a>
        <a href="www.facebook.com/cripumps">
          <FaFacebook className="icons" /> www.facebook.com/cripumps
        </a>
        <a href="www.crigroups.com">
          <CiGlobe className="icons"/> www.crigroups.com
        </a>
      </div>
    </div>
  );
}

export default App;
