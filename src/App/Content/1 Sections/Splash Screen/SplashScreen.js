// IMPORTS /////////////////////////////////////////////////
import TimedSplashScreen from "../TimedSplashScreen";
import SplashScreenLayer0 from "./SplashScreenLayer0";

// COMPONENT /////////////////////////////////////////////////
function SplashScreen({}) {

    // RENDER //////////////////////////////////////////////////
    return (
        <TimedSplashScreen duration={5000} leaveTo="/">
            <SplashScreenLayer0 />
        </TimedSplashScreen>
    );
};

// EXPORTS /////////////////////////////////////////////////////////
export default SplashScreen;