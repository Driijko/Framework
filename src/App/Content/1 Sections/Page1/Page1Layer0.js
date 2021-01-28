// IMPORTS ////////////////////////////////////////////////////
// Import components ------------------------------------------
import Layer from "../Layer";

import SlideShow from "../../2 Elements/Images/SlideShow";
import SlideShow0 from "../../2 Elements/Images/SlideShows/SlideShow0";

// COMPONENT ////////////////////////////////////////////////////
function Page1Layer0({width, tabIndex, enterSelect, triggerExit}) {
    return (
        <Layer>
            <SlideShow 
                width={width}
                spatial={[1, 7, 18, 15]}
                duration={5}
                numOfImages={3}
                number={0}
            />
        </Layer>
    );
};

export default Page1Layer0;