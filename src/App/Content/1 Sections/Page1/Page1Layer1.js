// IMPORTS //////////////////////////////////////////////////////////
// Import components ------------------------------------------------
import Layer from "../Layer";
import LayerSection from "../LayerSection";

import TextHeader0 from "../../2 Elements/Text/TextHeaders/TextHeader0";

// COMPONENT /////////////////////////////////////////////////////////
function Page1Layer1({width, tabIndex, enter, triggerExit}) {
    return (
        <Layer type="column">
            <LayerSection type="column" >
                <TextHeader0
                    width={width}
                    level={1}
                    spatial={[0, 0, 20, 4]}
                >
                    <h1>HEADER</h1>
                </TextHeader0>
                <TextHeader0
                    width={width}
                    level={1}
                    spatial={[0, 4, 20, 7]}
                >
                    <h1>HEADER AGAIN</h1>
                </TextHeader0>
            </LayerSection>
            {/* <LayerSection type="column" >

            </LayerSection> */}
        </Layer>
    );
};

// EXPORTS //////////////////////////////////////////////////////////////
export default Page1Layer1;