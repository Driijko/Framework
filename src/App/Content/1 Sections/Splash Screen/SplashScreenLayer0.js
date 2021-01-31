// IMPORTS ////////////////////////////////////////////////////
import Layer from "../Layer";
import TextHeader0 from "../../2 Elements/Text/TextHeaders/TextHeader0";

// COMPONENT //////////////////////////////////////////////////////
function SplashScreenLayer0({width}) {

    // RENDER ///////////////////////////////////////////////////////
    return (
        <Layer type="basic">
            <TextHeader0 
                width={width}
                level={1}
                spatial={[0, 0, 20, 30]}
            >
                <h1>Splash Screen</h1>
            </TextHeader0>
        </Layer>
    );
};

// EXPORTS ////////////////////////////////////////////////////////////
export default SplashScreenLayer0;