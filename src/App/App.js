//IMPORTS //////////////////////////////////////////////////////////////
// Import libraries --------------------------------------------------
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// Import Universal Styles ------------------------------------------
import "./App.css";

// Import Components ---------------------------------------------
import SiteBackground from "./Content/0 Site/SiteBackground";
import SiteForeground from "./Content/0 Site/SiteForeground";
import Test from "./Content/0 Site/test";
// import Page0 from "./Content/1 Sections/Page0";

// Import Music ---------------------------------------------- 
// import Audio from "./Tools/Audio";
// import music from "./Content/2 Assets/audio/music/music.mp3";

function App() {
  return (
    <div>
      <SiteBackground />
      {/* <Audio audio={[music]} playAudio={0} loop /> */}
      <Router>
        <Switch>
          <Route path="/" component={Test} />
        </Switch>
      </Router>
      <SiteForeground />
    </div>
  );
};

export default App;