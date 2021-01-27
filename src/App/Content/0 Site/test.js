// IMPORTS ///////////////////////////////////////////////////////
// Import libraries ----------------------------------------------
import {useContext} from "react";
import styled from "styled-components";

// Import context / providers ----------------------------------
import SiteForegroundContextProvider from "./SiteForegroundContext";
import SiteForegroundContext from "./SiteForeground";

// STYLE /////////////////////////////////////////////////////////
const SiteForegroundAnimationTrigger = styled("button")`
    position: absolute;
    font-size: 50px;
`;

function Test(props) {
    const {triggerForegroundAnimate} = useContext(SiteForegroundContext);

    return (
        <SiteForegroundAnimationTrigger 
            onClick={
                triggerForegroundAnimate
            }
        >
            TEST
        </SiteForegroundAnimationTrigger>
    );  
};

export default Test;