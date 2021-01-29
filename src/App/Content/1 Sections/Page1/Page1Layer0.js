// IMPORTS ////////////////////////////////////////////////////
// Import components ------------------------------------------
import Layer from "../Layer";

import SlideShow from "../../2 Elements/Images/SlideShow";

// COMPONENT ////////////////////////////////////////////////////
function Page1Layer0({width, tabIndex, enterSelect, triggerExit}) {
    return (
        <Layer>
            <SlideShow 
                width={width}
                spatial={[1, 6, 18, 15]}
                duration={5}
                numOfImages={3}
                number={0}
                captionSpatial={[2, 22, 16, 2]}
            />
        </Layer>
    );
};

export default Page1Layer0;