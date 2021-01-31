// IMPORTS //////////////////////////////////////////////
import {useEffect} from "react";
import styled, {css} from "styled-components";
import NewPage from "../NewPage";
import LayerDiv from "../LayerDiv";
import Gutter from "../Gutter";
import Page3Layer0 from "./Page3Layer0";
import Page3Layer1 from "./Page3Layer1";
import NewLayer from "../NewLayer";


// COMPONENT ////////////////////////////////////////////
function Page3() {

    // RENDER //////////////////////////////////////////////////
    return (
        <NewPage initialLayerFocus="layer0">
            <NewLayer 
                type="basic" 
                focus={{
                    layerId: "layer0",
                    focusableElements: 3,
                    transition: "layer1",
                }}
            >
                <Page3Layer0 />
            </NewLayer>
            <Gutter />
            <NewLayer
                type="basic"
                focus={{
                    layerId: "layer1",
                    focusableElements: 3,
                    transition: "layer0",
                }}
            >
                <Page3Layer1 />
            </NewLayer>
        </NewPage>
    );
};

export default Page3;