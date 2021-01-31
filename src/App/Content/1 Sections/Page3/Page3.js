// IMPORTS //////////////////////////////////////////////
import {useEffect} from "react";
import styled, {css} from "styled-components";
import NewPage from "../NewPage";

// TESTING ///////////////////////////////////////////////////////
const TestDiv = styled("div")`${({offset})=>css`
    position: absolute;
    color: white;
    width: 400px;
    height: 400px;
    background-color: black;
    left: ${offset}px;
`}`;

function Test({enterKey, triggerExit, layerFocus, setLayerFocus, tab, offset}) {

    
    return (
        <TestDiv offset={offset}>{enterKey ? "enter" : null}</TestDiv>
    );
};

// COMPONENT ////////////////////////////////////////////
function Page3() {

    // RENDER //////////////////////////////////////////////////
    return (
        <NewPage initialLayerFocus="layer0">
            <Test offset={0}/>
            <div></div>
            <Test offset={500}/>
        </NewPage>
    );
};

export default Page3;