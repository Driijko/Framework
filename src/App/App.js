//IMPORTS //////////////////////////////////////////////////////////////
// Import libraries --------------------------------------------------
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// Import Universal Styles ------------------------------------------
import "./App.css";

// Import context / providers ----------------------------------------
import {SiteForegroundContextProvider} from "./Content/0 Site/SiteForeground";

// Import Components ---------------------------------------------
import SiteBackground from "./Content/0 Site/SiteBackground";
import {SiteForeground} from "./Content/0 Site/SiteForeground";
import Page0 from "./Content/1 Sections/Page0/Page0";
import Page1 from "./Content/1 Sections/Page1/Page1";
import Page2 from "./Content/1 Sections/Page2/Page2";
import Page3 from "./Content/1 Sections/Page3/Page3";
import SplashScreen from "./Content/1 Sections/Splash Screen/SplashScreen";

// Import Music ---------------------------------------------- 
// import Audio from "./Tools/Audio";
// import music from "./Content/2 Assets/audio/music/music.mp3";

function App() {
  return (
    <div>
      <SiteBackground />
      {/* <Audio audio={[music]} playAudio={0} loop /> */}
      <SiteForegroundContextProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Page0} />
            <Route path="/test" component={Page1} />
            <Route path="/page2" component={Page2} />
            <Route path="/splash" component={SplashScreen} />
            <Route path="/page3" component={Page3} />
          </Switch>
        </Router>
        <SiteForeground />
      </SiteForegroundContextProvider>
    </div>
  );
};

export default App;