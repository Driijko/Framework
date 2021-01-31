// IMPORTS ///////////////////////////////////////////////////
// Import libraries --------------------------------------------
import {useState, useEffect, cloneElement} from "react";

// Import components ------------------------------------------
import LayerDiv from "./LayerDiv";

// COMPONENT ///////////////////////////////////////////////////////
function NewLayer({
    children, type, enterKey, tab, triggerExit, layerFocus, setLayerFocus,
    focus, width, height
}) {

    // TAB INDEX ///////////////////////////////////////////////////
    const [tabIndex, setTabIndex] = useState(0);

    useEffect(()=> {
        if (tab && layerFocus === focus.layerId) {
            if (tab === "forwards") {
                if (tabIndex === focus.focusableElements) {
                    if (focus.transition === "cycle") {
                        setTabIndex(0);
                    }
                    else {
                        setLayerFocus(focus.transition);
                        setTabIndex(0);
                    };
                }
                else {
                    setTabIndex(tabIndex + 1);
                };
            }
            else if (tab === "backwards") {
                if (tabIndex === 0) {
                    if (focus.transition === "cycle") {
                        setTabIndex(focus.focusableElements);
                    }
                    else {
                        setLayerFocus(focus.transition);
                        setTabIndex(0);
                    };
                }
                else {
                    setTabIndex(tabIndex - 1);
                };
            };
        }
    },[tab]);

    // ADD PROPS TO CHILD //////////////////////////////////////////
    const modifiedChild = cloneElement(children, {
        tabIndex: tabIndex,
        width: width,
        height: height,
        enterKey: enterKey,
        "triggerExit": triggerExit,
        "setLayerFocus": setLayerFocus,
    })
    
    // RENDER ////////////////////////////////////////////////////
    return (
        <LayerDiv type={type} >
            {modifiedChild}
        </LayerDiv>
    );
};

// EXPORTS //////////////////////////////////////////////////////
export default NewLayer;