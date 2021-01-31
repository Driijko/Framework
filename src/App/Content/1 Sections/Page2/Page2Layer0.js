// IMPORTS ////////////////////////////////////////////////////
// Import components ------------------------------------------
import Layer from "../Layer";
import LayerSection from "../LayerSection";
import TextHeader0 from "../../2 Elements/Text/TextHeaders/TextHeader0";
import Link from "../../2 Elements/Links/Link";

// COMPONENT ////////////////////////////////////////////////////
function Page2Layer0({width, height, tabIndex, enter, triggerExit}) {
    const containerSize = {width: width, height: height};
    return (
        <Layer type="row" >
            <LayerSection type="row" containerSize={containerSize} >
                <TextHeader0
                    spatial={[0, 0, 20, 30]}
                    level={1}
                    width={width}
                >
                    <h1>Layer Row</h1>
                </TextHeader0>
            </LayerSection>
            <LayerSection type="row" containerSize={containerSize} >
                <TextHeader0
                    spatial={[0, 0, 20, 30]}
                    level={1}
                    width={width}
                >
                    <h1>Layer Row</h1>
                </TextHeader0>
            </LayerSection>

            {/* Fixed Layer ///////////////////////////////////////*/}
            <LayerSection type="fixed" containerSize={containerSize} >
                <TextHeader0
                    width={width}
                    spatial={[0, 0, 20, 5]}
                    level={1}
                >
                    <h1>Hello</h1>
                </TextHeader0>
                <Link 
                    linkType={{
                        type: "section",
                        "triggerExit": triggerExit,
                        linkTo: "/test"
                    }}
                    linkStyle={{
                        number: 0,
                        colors: [
                            "orange",
                            "green",
                            "red",
                        ],
                    }}
                    width={width}
                    spatial={[0, 20, 20, 10]}
                    focus={tabIndex === 1}
                    enterSelect={tabIndex === 1 && enter}
                >
                    LINK 1
                </Link>
            </LayerSection>
        </Layer>
    );
};

export default Page2Layer0;