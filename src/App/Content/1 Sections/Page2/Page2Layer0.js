// IMPORTS ////////////////////////////////////////////////////
// Import components ------------------------------------------
import Layer from "../Layer";
import LayerSection from "../LayerSection";
import TextHeader0 from "../../2 Elements/Text/TextHeaders/TextHeader0";

// COMPONENT ////////////////////////////////////////////////////
function Page2Layer0({width, tabIndex, enter, triggerExit}) {
    return (
        <Layer type="row" >
            <LayerSection type="row" containerLength={width} >
                <TextHeader0
                    spatial={[0, 0, 20, 30]}
                    level={1}
                    width={width}
                >
                    <h1>Layer Row</h1>
                </TextHeader0>
            </LayerSection>
            <LayerSection type="row" containerLength={width} >
                <TextHeader0
                    spatial={[0, 0, 20, 30]}
                    level={1}
                    width={width}
                >
                    <h1>Layer Row</h1>
                </TextHeader0>
            </LayerSection>
        </Layer>
    );
};

export default Page2Layer0;